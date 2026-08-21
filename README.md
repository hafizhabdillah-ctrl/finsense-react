<div align="center">


# 💰 FinSense
### *Smart Finance Assistant for UMKM*

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115.11-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.19-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma&logoColor=white)


> **Capstone Project Coding Camp 2026** – Team ID: CC26-PSU282

---
</div>

## 📌 Tentang FinSense

FinSense adalah **asisten keuangan cerdas** untuk UMKM yang menggabungkan pencatatan transaksi manual, **input suara** (voice-to-produk), serta **prediksi AI** untuk pemasukan, rekomendasi restok stok, dan deteksi produk terlaris.

### 🎯 Masalah yang Diselesaikan

- ❌ UMKM kesulitan mencatat transaksi secara real-time  
- ❌ Stok tidak terpantau → kehabisan atau overstock  
- ❌ Sulit memprediksi pemasukan di masa depan  
- ❌ Input transaksi lambat (terutama saat ramai)  

### 💡 Solusi FinSense

- ✅ Pencatatan **cepat** (manual + voice)  
- ✅ Dashboard **interaktif** & real-time  
- ✅ Prediksi **akurat** dengan model time-series  
- ✅ Rekomendasi **restok otomatis**  
- ✅ **Voice input** untuk 121 produk (akurasi tinggi)

---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
|-------|-----------|
| 🔐 **Autentikasi** | Login, register, reset password via email (JWT) |
| 🛒 **POS + Voice** | Input transaksi dengan suara (121 produk) atau manual |
| 📊 **Dashboard** | Grafik pemasukan/pengeluaran, saldo, top 5 produk |
| 🔮 **Forecasting** | Prediksi pemasukan harian (model LSTM) |
| 📦 **Manajemen Stok** | CRUD produk, riwayat stok, notifikasi stok menipis |
| 🧠 **Rekomendasi AI** | Restok stok & produk terlaris dari model ML |

> 🗣️ **Voice Recognition** – Model mendukung **121 produk spesifik** ([lihat daftar](./PRODUCTS_LIST.md)). Di luar itu, gunakan input manual.

---

## 🚀 Setup Cepat

### Prasyarat
- Node.js 18+, npm
- Python 3.10 – 3.12
- PostgreSQL
- ffmpeg

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/hafizhabdillah-ctrl/finsense-project.git
cd finsense

# 2. Setup backend
cd backend
cp .env.example .env
# edit .env (isi DATABASE_URL, JWT_SECRET)
npm install
npx prisma migrate dev --name init
npm run dev

# 3. Setup frontend (terminal baru)
cd frontend
cp .env.example .env
npm install
npm run dev

# 4. Setup AI service (terminal baru)
cd ai-service
python -m venv venv
source venv/bin/activate  # atau .\venv\Scripts\activate
pip install -r requirements.txt
python combined_ai.py

# 5. Buka aplikasi
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
# AI Service: http://localhost:8000
```

---

## 📂 Struktur Proyek

```
FinSense/
├── ai-service/           # FastAPI (voice + forecasting)
├── backend/              # Express.js + Prisma
├── frontend/             # React + Vite + Tailwind
├── data-science/         # Preprocessing data
├── PRODUCTS_LIST.md      # 121 produk yang dikenali
└── README.md
```

---

## 🤖 Model AI & Download

Model tidak disertakan di repo (ukuran besar). Unduh dari tautan berikut:

| Model | Link | Penempatan |
|-------|------|-------------|
| Voice Model (v10) & Forecasting Models  | [Google Drive](https://drive.google.com/drive/u/0/folders/17zq-z2nmwsiqvGJcqZ4NHkJy6oiy2iEU) | `ai-service/` |
| Preprocessing Data | [Google Drive](https://drive.google.com/drive/folders/1mIRjNcGmQtct0z2QnpFC3AKbsFXZDMf0?usp=sharing) | `data-science/` |

> Tanpa model, backend tetap berjalan (fitur AI tidak aktif).

---


## 👥 Tim Pengembang

| Nama | ID | Role | Contact | 
|------|------|------|------|
| Ibrahim Irfanul Haq | CACC229D6Y0513 | AI Engineer | [Ibrahim Irfanul Haq](https://www.linkedin.com/in/ibrahimirfanulhaq/)|
| Rafi Azhar Suadmaja | CACC229D6Y0563 | AI Engineer |  [Rafi Azhar Suadmaja](https://www.linkedin.com/in/rafi-azhar-suadmaja-53493028b)|
| Alifah Mu’asyaroh | CDCC229D6X1533 | Data Scientist | [Alifah Mu’asyaroh](https://www.linkedin.com/in/alifah-mu-asyaroh-8667513ab)|
| Alviyatur Rahmaniyah | CDCC229D6X1609 | Data Scientist | [Alviyatur Rahmaniyah](https://www.linkedin.com/in/alviyatur-rahmaniyah)|
| Hafizh Kusuma Abdillah | CFCC229D6Y1818 | Full-Stack Developer | [Hafizh Kusuma Abdillah](https://www.linkedin.com/in/hafizh-kusuma-abdillah-440102297/)|
| Rifki Ardiansah | CFCC574D6Y2454 | Full-Stack Developer | [Rifki Ardiansah](https://www.linkedin.com/in/rifki-ardiansahh/) |

---


<div align="center">
  Built with ☕ by Team CC26-PSU282  
  🌐 <a href="https://finsense-project.vercel.app">Live Demo</a> | 📧 finsense@support.com
</div>
