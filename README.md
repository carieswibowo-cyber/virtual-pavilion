# Virtual Pavilion of Indonesian Labor Migrants - Web VR (Versi 8)

Proyek ini adalah website pameran **Virtual Reality (VR) 360 derajat interaktif** bertema fiksi ilmiah futuristik (sci-fi glassmorphism) yang dikembangkan untuk menyajikan data, pameran virtual, dan layanan perlindungan terpadu untuk Pekerja Migran Indonesia (PMI).

## 🚶‍♂️ Fitur Unggulan Baru di Versi 8 (Pemandu Hologram 3D)
Di versi ini, kami merombak sistem navigasi:
*   Hotspot bulat hijau telah digantikan dengan **Pemandu Manusia Hologram 3D** yang melayang interaktif di setiap pintu masuk booth.
*   Pemandu hologram ini memiliki siluet badan, kepala, sabuk orbit bercahaya, dan piringan proyeksi lantai virtual yang berputar.
*   Jika kursor didekatkan (hover), pemandu akan beraksi dengan berubah warna menjadi oranye menyala secara dinamis dan memicu efek suara sci-fi.
*   Mendukung pemutaran file **`musik.mp3`** eksternal dengan fitur pengaturan tempo di baris kontrol bawah.

## ⚙️ Persiapan Gambar Panorama & File Musik (Wajib)
Sebelum menjalankan website, pastikan Anda telah menyalin ke-13 berkas gambar panorama pameran Anda dan file musik ke folder ini:
*   Ganti nama ke-13 gambar panorama menjadi **huruf kecil tanpa spasi**: `view1.jpg` hingga `v4binawan.jpg`.
*   Siapkan sebuah berkas lagu instrumen berformat `.mp3`, ganti namanya menjadi **`musik.mp3`**, dan taruh bersama dengan file `index.html`.

## 🚀 Cara Menjalankan Website VR Secara Lokal (Offline)
Jalankan server lokal menggunakan protokol `http://` untuk memuat gambar:
```bash
python -m http.server 8000
```
Akses halaman: `http://localhost:8000` di browser Anda!
