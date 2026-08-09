# Virtual Pavilion of Indonesian Labor Migrants - Web VR

Proyek ini adalah website pameran **Virtual Reality (VR) 360 derajat interaktif** bertema fiksi ilmiah futuristik (sci-fi glassmorphism) yang dikembangkan untuk mengenang, menyajikan data, dan menunjukkan fasilitas pelayanan virtual untuk Pekerja Migran Indonesia (PMI).

## 📁 Struktur File di Dalam ZIP
1.  **`index.html`**: Kerangka utama WebVR A-Frame dengan HUD Panel, Beranda Landing Page, dan Struktur 3D Hologram.
2.  **`style.css`**: Pengaturan gaya tampilan Glassmorphism (tepian neon, backdrop-blur, tombol cahaya dinamis, dan visualizer musik).
3.  **`app.js`**: Pusat data navigasi untuk 13 titik panorama, Web Audio API Procedural Synthesizer (audio & sfx sci-fi buatan kode), dan logika dasbor statistik BP2MI.

## ⚙️ Persiapan Gambar Panorama 360° (Wajib)
Sebelum menjalankan website, pastikan Anda telah menyalin ke-13 berkas gambar panorama pameran Anda dan meletakkannya di **folder yang sama** dengan file hasil ekstrak ZIP ini.
Pastikan nama file gambar panorama sama persis dengan nama-nama berikut:
*   `view1.jpg`
*   `view2.jpg`
*   `view2b.jpg`
*   `view3.jpg`
*   `view4.jpg`
*   `view5.jpg`
*   `view6.jpg`
*   `view7.jpg`
*   `view8.jpg`
*   `v2.jpg`
*   `v2l.jpg`
*   `v3binawan.jpg`
*   `v4binawan.jpg`

## 🚀 Cara Menjalankan Website VR Secara Lokal (Offline)
Untuk alasan keamanan browser (*CORS Policy*), panorama 360° tidak dapat langsung dimuat jika Anda hanya membuka file `index.html` melalui klik ganda biasa. Anda harus menjalankannya menggunakan protokol server lokal (`http://`).

### Cara 1: Menggunakan Live Server di VS Code (Rekomendasi)
1. Ekstrak file ZIP ini ke sebuah folder.
2. Pindahkan ke-13 gambar panorama ke dalam folder tersebut.
3. Buka folder tersebut di **Visual Studio Code**.
4. Pasang ekstensi **"Live Server"** dari VS Code Extension Marketplace.
5. Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.

### Cara 2: Menggunakan Terminal Python (Sangat Cepat)
Jika komputer Anda sudah terpasang Python, buka Command Prompt (Windows) atau Terminal (Mac/Linux) di dalam folder proyek tersebut, lalu ketik:
```bash
python -m http.server 8000
```
Buka browser Anda dan akses halaman: `http://localhost:8000`

## 🌐 Cara Meng-online-kan ke Internet Secara Gratis
Silakan buka file **`deployment-guide.pdf`** yang disertakan bersama dengan berkas ini untuk mendapatkan panduan visual mengunggah website ini ke layanan gratis seperti **GitHub Pages** atau **Netlify Drop** hanya dalam waktu beberapa detik tanpa perlu menginstal aplikasi tambahan apa pun!
