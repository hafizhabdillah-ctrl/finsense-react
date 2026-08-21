"""
FinSense FastAPI — Serve produk model (v10) for the voice frontend.
====================================================================

Endpoint:
  POST /predict
    form-data: audio (file), transcript (str), jumlah (int)
    returns: { produk, produk_conf, produk_top3, jumlah, unit_price, harga }

Run:
  pip install fastapi uvicorn python-multipart librosa tensorflow soundfile
  uvicorn serve_model:app --host 0.0.0.0 --port 8000

Note: browser sends webm/opus audio. We decode via librosa (needs ffmpeg).
"""

import io
import json
import tempfile
from pathlib import Path

import numpy as np
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

# Import the shared inference logic
from inference_wrapper_v10 import audio_to_logmel, parse_jumlah, DEFAULT_AUDIO_CONFIG

app = FastAPI(title="FinSense Produk Model")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"],
)

# ─── Load model + artifacts once at startup ───────────────────────
MODEL_DIR = "model_v10/savedmodel_v10"
ARTIFACTS = "model_v10/artifacts.json"

import tensorflow as tf

print("Loading model…")
_model = tf.saved_model.load(MODEL_DIR)
_infer = _model.signatures["serving_default"]
with open(ARTIFACTS, encoding="utf-8") as f:
    _art = json.load(f)
PRODUK_VOCAB = _art["produk_vocab"]
UNIT_PRICE = _art["unit_price_lookup"]
print(f"✓ Model ready ({len(PRODUK_VOCAB)} produk)")


# def _decode_audio_to_feat(audio_bytes):
#     """Decode uploaded audio bytes → log-mel feature."""
#     import librosa
#     with tempfile.NamedTemporaryFile(suffix=".webm", delete=True) as tmp:
#         tmp.write(audio_bytes)
#         tmp.flush()
#         return audio_to_logmel(tmp.name, DEFAULT_AUDIO_CONFIG)
def _decode_audio_to_feat(audio_bytes):
    import tempfile
    import os

    # Buat file temporary dengan nama unik, tanpa otomatis dihapus
    fd, path = tempfile.mkstemp(suffix=".webm")
    os.close(fd)  # Tutup file descriptor agar tidak terkunci

    try:
        with open(path, "wb") as f:
            f.write(audio_bytes)
        # Proses dengan librosa
        return audio_to_logmel(path, DEFAULT_AUDIO_CONFIG)
    finally:
        # Hapus file setelah selesai (termasuk jika terjadi error)
        if os.path.exists(path):
            os.unlink(path)

@app.post("/")
async def predict(
    audio: UploadFile = File(...),
    transcript: str = Form(""),
    jumlah: int = Form(0),
):
    # Produk from audio model
    feat = _decode_audio_to_feat(await audio.read())
    out = _infer(log_mel=tf.constant(feat[np.newaxis, ...]))
    probs = list(out.values())[0].numpy()[0]
    idx = int(np.argmax(probs))
    produk = PRODUK_VOCAB[idx]
    top3_idx = np.argsort(probs)[-3:][::-1]

    # Jumlah: prefer client value, else parse transcript, else 1
    qty = jumlah if jumlah and jumlah > 0 else (parse_jumlah(transcript) or 1)

    unit_price = UNIT_PRICE.get(produk, 0)
    harga = unit_price * qty

    return {
        "intent": "jual",
        "produk": produk,
        "produk_conf": float(probs[idx]),
        "produk_top3": [[PRODUK_VOCAB[i], float(probs[i])] for i in top3_idx],
        "jumlah": qty,
        "unit_price": unit_price,
        "harga": harga,
    }


@app.get("/health")
def health():
    return {"status": "ok", "n_produk": len(PRODUK_VOCAB)}
