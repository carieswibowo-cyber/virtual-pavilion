# Virtual Pavilion of Indonesian Labor Migrants - Web VR (Seamless Edition)

Proyek ini adalah website pameran **Virtual Reality (VR) 360 derajat interaktif** bertema fiksi ilmiah futuristik (sci-fi glassmorphism) yang menyajikan navigasi **Google Street View / Matterport** yang seamless dan bebas lag.

## 📁 Struktur File di Dalam ZIP
1.  **`index.html`**: Kerangka utama WebVR A-Frame dengan HUD Panel, Beranda Landing Page, dan Struktur 3D Hologram.
2.  **`style.css`**: Desain visual Glassmorphism (tepian neon, backdrop-blur, tombol cahaya dinamis, dan visualizer musik).
3.  **`app.js`**: Pusat data navigasi untuk 13 titik panorama berpenunjuk cakram lantai datar yang interaktif, pemutar musik MP3 eksternal (`musik.mp3`), dan logika dasbor statistik BP2MI.

## ⚙️ Persiapan Gambar Panorama 360° & Musik MP3 (Wajib)
Sebelum menjalankan website, pastikan Anda telah menyalin berkas-berkas berikut dan meletakkannya di **folder yang sama** dengan file hasil ekstrak ZIP ini:

*   **13 File Gambar Panorama (Ubah nama menjadi huruf kecil tanpa spasi!):**
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

*   **1 File Lagu MP3:**
    *   `musik.mp3` *(Ganti dengan file instrumen lagu favorit Anda)*

## 🚀 Cara Menjalankan Website VR Secara Lokal (Offline)
Untuk alasan keamanan browser (*CORS Policy*), panorama 360° tidak dapat langsung dimuat jika Anda hanya membuka file `index.html` melalui klik ganda biasa. Anda harus menjalankannya menggunakan protokol server lokal (`http://`).

### Cara 1: Menggunakan Live Server di VS Code (Rekomendasi)
1. Ekstrak file ZIP ini ke sebuah folder.
2. Pindahkan ke-13 gambar panorama dan file `musik.mp3` ke dalam folder tersebut.
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

## 🗺️ Fitur Unggulan Baru di Versi 10: "Map & Visited Tracker Panel"
1.  **Navigasi Peta Cepat (Quick Access Teleport)**: Panel mengapung (floating sidebar) di sisi kiri layar yang mengelompokkan ke-13 ruangan secara logis. Sekali klik pada nama ruangan akan membuat Anda meluncur melayang secara instan ke mana saja tanpa tersesat!
2.  **Visited Scene Tracker (Gamifikasi)**: Menampilkan tanda centang hijau menyala pada nama-nama ruangan yang telah berhasil Anda kunjungi, lengkap dengan bar penunjuk progress eksplorasi Anda (0/13 hingga 13/13). Sempurna untuk memancing rasa penasaran pengunjung agar menjelajah seisi ruangan pameran secara tuntas!
3.  **100% Anti-Tersesat**: Pengunjung tidak akan pernah bingung lagi menentukan ke mana arah depan/belakang karena HUD selalu menampilkan lokasi aktif dan peta navigasi cepat.
