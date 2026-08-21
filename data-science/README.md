# Data Science

## Overview

Folder ini berisi seluruh proses *data science* pada project FinSense. Proses ini mencakup preprocessing data transaksi, exploratory data analysis (EDA), preprocessing audio, pembentukan transkrip, pelabelan NLP (*intent* dan *entity*), serta evaluasi sistem melalui A/B testing untuk membandingkan efisiensi *voice input* dan *manual input*. Selain itu, tersedia laporan komprehensif yang mendokumentasikan seluruh proses analisis.

---

## Notebooks

| Notebook                         | Deskripsi                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `01_cleaning_transactions.ipynb` | Data preprocessing, transformation, stock simulation, dan dataset merging                      |
| `02_analysis_transactions.ipynb` | Exploratory Data Analysis (EDA) dan visualisasi transaksi                                      |
| `03_cleaning_audio.ipynb`        | Audio preprocessing (*mono conversion*, *resampling*, *normalization*, dan *silence trimming*) |
| `04_nlp_audio.ipynb`             | Pembentukan transkrip transaksi dan pelabelan NLP (*intent* dan *entity*)                      |
| `05_ab_testing.ipynb`            | Analisis A/B testing untuk membandingkan voice input vs manual input berdasarkan waktu        |
---

## How to Run

Install dependency dan jalankan Jupyter Notebook:

```bash
pip install -r requirements.txt
jupyter notebook
```

Kemudian jalankan notebook sesuai urutan:
1. 01_cleaning_transactions.ipynb
2. 02_analysis_transactions.ipynb
3. 03_cleaning_audio.ipynb
4. 04_nlp_audio.ipynb
5. 05_ab_testing.ipynb
---

## Dataset Documentation

Detail dataset, preprocessing, definisi variabel, serta karakteristik data tersedia pada:

`data_dictionary.md`

---

## Comprehensive Report
Dokumen ini menjelaskan secara rinci setiap tahapan analisis data yang dilakukan dalam project.
🔗 **View Report:** [Google Drive Link](https://drive.google.com/file/d/1tpCK65ZhvTN2tGw2_13QvLoUaAEBpER7/view?usp=sharing)

---

## Dashboard

Dashboard Streamlit untuk visualisasi transaksi tersedia pada folder:

`dashboard/`

🔗 **Live Dashboard:** [Klik di sini untuk melihat dashboard](https://sales-dashboard-capstone.streamlit.app/)

Untuk menjalankan secara lokal, lihat dokumentasi di bagian “Run Dashboard Locally”.