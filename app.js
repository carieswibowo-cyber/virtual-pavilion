/* ==========================================
   DATA KONEKTIVITAS PANORAMA 360° (13 TITIK)
   ========================================== */
const scenes = {
    "view1": {
        title: "Lobi Depan Paviliun",
        image: "view1.jpg",
        description: "Pintu masuk utama Virtual Pavilion Pekerja Migran Indonesia. Selamat datang!",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0.5 0.8 -4", target: "view2", label: "Maju ke Depan" },
            { position: "3.5 0.5 -3", target: "v2", label: "Area Kayu Kanan" },
            { position: "-3.5 0.5 -3", target: "v2l", label: "Area Edukasi Kiri" }
        ]
    },
    "v2": {
        title: "Sayap Kanan (Motif Kayu)",
        image: "v2.jpg",
        description: "Booth kanan berpilar kayu estetis dengan logo 3D yang megah.",
        rotation: "0 -45 0",
        hotspots: [
            { position: "-2.5 0.6 -4", target: "view1", label: "Kembali ke Lobi" },
            { position: "0 0.8 -4", target: "view2", label: "Maju ke Meja Binawan" }
        ]
    },
    "v2l": {
        title: "Sayap Kiri (Area Edukasi)",
        image: "v2l.jpg",
        description: "Booth edukasi sisi kiri dengan poster program penempatan luar negeri resmi.",
        rotation: "0 45 0",
        hotspots: [
            { position: "2.5 0.6 -4", target: "view1", label: "Kembali ke Lobi" },
            { position: "0 0.8 -4", target: "view2", label: "Maju ke Meja Informasi" }
        ]
    },
    "view2": {
        title: "Selasar Depan Booth Binawan",
        image: "view2.jpg",
        description: "Persimpangan utama lobi depan, berdekatan dengan meja konsultasi utama Binawan.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "-3 0.8 -3.5", target: "v2l", label: "Geser ke Kiri" },
            { position: "3 0.8 -3.5", target: "v2", label: "Geser ke Kanan" },
            { position: "1 0.8 -4", target: "view2b", label: "Meja Konsultasi Binawan" },
            { position: "-0.5 0.8 -4", target: "view3", label: "Masuk ke Ruang Tengah" }
        ]
    },
    "view2b": {
        title: "Meja Informasi Binawan Group",
        image: "view2b.jpg",
        description: "Area interaksi dan konsultasi langsung bagi pencari lowongan kerja di luar negeri.",
        rotation: "0 0 0",
        hotspots: [
            { position: "-2.5 0.6 2.5", target: "view2", label: "Kembali ke Selasar" },
            { position: "-1 0.7 -4", target: "v3binawan", label: "Masuk Booth Binawan" }
        ]
    },
    "v3binawan": {
        title: "Interior Booth Binawan",
        image: "v3binawan.jpg",
        description: "Di dalam struktur kubah kuning-merah modern, pusat rekrutmen kesehatan.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 0.7 4", target: "view2b", label: "Ke Meja Depan" },
            { position: "-3.5 0.6 -2.5", target: "v4binawan", label: "Samping Meja Konsultasi" },
            { position: "2.5 0.7 -3.5", target: "view3", label: "Jalan ke Ruang Tengah" }
        ]
    },
    "v4binawan": {
        title: "Samping Meja Konsultasi Binawan",
        image: "v4binawan.jpg",
        description: "Area santai untuk konsultasi program pemagangan dan studi ke luar negeri.",
        rotation: "0 180 0",
        hotspots: [
            { position: "3 0.6 3", target: "v3binawan", label: "Kembali ke Kubah" },
            { position: "-1.5 0.7 -4", target: "view3", label: "Menuju Aula Tengah" }
        ]
    },
    "view3": {
        title: "Aula Tengah Paviliun",
        image: "view3.jpg",
        description: "Pusat pertemuan pameran dengan atap lengkung raksasa yang menyebarkan cahaya alami.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 0.7 4", target: "view2", label: "Kembali ke Depan" },
            { position: "-3 0.7 -3", target: "v4binawan", label: "Ke Area Binawan" },
            { position: "0 0.8 -4", target: "view4", label: "Maju ke Transisi Tengah" }
        ]
    },
    "view4": {
        title: "Ruang Transisi Tengah",
        image: "view4.jpg",
        description: "Selasar penghubung antara Area Binawan di depan dan Zona Polna-Aerowisata di belakang.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 0.7 4", target: "view3", label: "Mundur ke Aula Tengah" },
            { position: "0 0.8 -4", target: "view5", label: "Masuk Zona Polna & Aerowisata" }
        ]
    },
    "view5": {
        title: "Zona Polna & Aerowisata",
        image: "view5.jpg",
        description: "Berdiri tepat di bawah lingkaran biru besar langit-langit, diapit maskapai Aerowisata & Polna.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 0.7 4", target: "view4", label: "Mundur ke Tengah" },
            { position: "1.5 0.7 -4", target: "view6", label: "Panggung Informasi Polna" },
            { position: "-1.5 0.7 -4", target: "view7", label: "Menuju Booth Resmi BP2MI" }
        ]
    },
    "view6": {
        title: "Panggung Booth Polna",
        image: "view6.jpg",
        description: "Area informasi edukasi sertifikasi kompetensi profesi pekerja migran.",
        rotation: "0 -120 0",
        hotspots: [
            { position: "-2 0.7 3.5", target: "view5", label: "Kembali ke Tengah" },
            { position: "-3 0.8 -3.5", target: "view7", label: "Melangkah ke Booth BP2MI" }
        ]
    },
    "view7": {
        title: "Depan Paviliun BP2MI",
        image: "view7.jpg",
        description: "Selamat datang di Paviliun Kementerian Pelindungan Pekerja Migran Indonesia / BP2MI.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "3 0.7 3", target: "view5", label: "Kembali ke Selasar Tengah" },
            { position: "-3 0.7 3", target: "view6", label: "Panggung Polna" },
            { position: "0 0.8 -4", target: "view8", label: "Masuk ke Pusat Data BP2MI" }
        ]
    },
    "view8": {
        title: "Pusat Data BP2MI",
        image: "view8.jpg",
        description: "Ruang pemantauan data statistik PMI nasional dan sistem pelindungan terpadu.",
        rotation: "0 -10 0",
        hotspots: [
            { position: "0 0.7 4", target: "view7", label: "Keluar ke Depan Booth" }
        ]
    }
};

/* ==========================================
   SOUND GENERATOR (WEB AUDIO PROCEDURAL SYNTH)
   ========================================== */
let audioCtx = null;
let musicEnabled = true;
let sfxEnabled = true;
let currentPreset = 'deep';
let synthInterval = null;

// Initializer AudioContext (Mencegah autostart blokir browser)
function initAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    startAmbientMusic();
}

// 1. Synth Musik Latar
function startAmbientMusic() {
    if (synthInterval) clearInterval(synthInterval);
    if (!musicEnabled) return;

    // Pola nada arpeggio sci-fi yang tidak membosankan
    const notes = {
        deep:   [130.81, 164.81, 196.00, 220.00, 261.63, 329.63, 392.00], // C3, E3, G3, A3, C4, E4, G4
        cyber:  [110.00, 138.59, 164.81, 220.00, 277.18, 329.63, 440.00], // A2, C#3, E3, A3, C#4, E4, A4
        mystic: [146.83, 174.61, 220.00, 293.66, 349.23, 440.00, 587.33]  // D3, F3, A3, D4, F4, A4, D5
    };

    let step = 0;
    synthInterval = setInterval(() => {
        if (!musicEnabled) return;
        
        // Pemicu nada ambient pad bergaung panjang setiap 1.5 detik
        const selectedNotes = notes[currentPreset];
        const pitch = selectedNotes[Math.floor(Math.random() * selectedNotes.length)];
        
        // Pemicu Generator Oscilator
        playDronePad(pitch, 2.5);

        // Visualizer animation trigger
        animateVisualizer();
        step++;
    }, 1500);
}

function playDronePad(frequency, duration) {
    if (!audioCtx || audioCtx.state === 'suspended') return;

    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc1.type = currentPreset === 'cyber' ? 'sawtooth' : 'sine';
    osc2.type = 'triangle';

    // Detuning untuk suara tebal
    osc1.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc2.frequency.setValueAtTime(frequency * 1.01, audioCtx.currentTime);

    filter.type = 'lowpass';
    filter.Q.value = 1.2;
    filter.frequency.setValueAtTime(800, audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + duration);

    // Envelope Volume (Fade In / Fade Out Lambat)
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.4);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(audioCtx.currentTime + duration);
    osc2.stop(audioCtx.currentTime + duration);
}

// 2. Efek Suara (SFX) Hover (Beep)
function playHoverSFX() {
    if (!sfxEnabled || !audioCtx) return;
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
}

// 3. Efek Suara (SFX) Klik Transit (Warp/Teleport)
function playTransitSFX() {
    if (!sfxEnabled || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1500, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.15);

    filter.type = 'peaking';
    filter.Q.value = 4.0;
    filter.frequency.setValueAtTime(1000, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.18);
}

// Visualizer Equalizer palsu yang presisi dan sinkron dengan denyut suara
function animateVisualizer() {
    if (!musicEnabled) return;
    const bars = document.querySelectorAll('.vis-bar');
    bars.forEach(bar => {
        const randHeight = Math.floor(Math.random() * 16) + 3;
        bar.style.height = `${randHeight}px`;
        setTimeout(() => {
            bar.style.height = '3px';
        }, 600);
    });
}

function changePreset(preset) {
    currentPreset = preset;
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    playHoverSFX();
    startAmbientMusic();
}

/* ==========================================
   MANAJEMEN TRANSISI & NAVIGASI 3D
   ========================================== */
let activeScene = "view1";

function buildHotspots(sceneId) {
    const container = document.getElementById('hotspots-container');
    container.innerHTML = ''; // Kosongkan hotspot lama

    const currentScene = scenes[sceneId];
    if (!currentScene || !currentScene.hotspots) return;

    currentScene.hotspots.forEach(hs => {
        // Wrapper entitas
        const el = document.createElement('a-entity');
        el.setAttribute('position', hs.position);
        
        // Sphere bercahaya hijau toska
        const sphere = document.createElement('a-sphere');
        sphere.setAttribute('radius', '0.14');
        sphere.setAttribute('color', '#00ffcc');
        sphere.setAttribute('class', 'clickable');
        sphere.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 1.2; shader: flat; transparent: true; opacity: 0.85');
        
        // Ring berputar pelan
        const ring = document.createElement('a-ring');
        ring.setAttribute('radius-inner', '0.18');
        ring.setAttribute('radius-outer', '0.22');
        ring.setAttribute('color', '#00ffcc');
        ring.setAttribute('rotation', '90 0 0');
        ring.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 0.5; shader: flat; side: double');
        ring.setAttribute('animation', 'property: rotation; to: 90 360 0; loop: true; dur: 4000; easing: linear');

        // Teks melayang di atas hotspot
        const text = document.createElement('a-text');
        text.setAttribute('value', hs.label);
        text.setAttribute('align', 'center');
        text.setAttribute('position', '0 0.42 0');
        text.setAttribute('scale', '0.6 0.6 0.6');
        text.setAttribute('color', '#ffffff');
        text.setAttribute('font', 'dejavu');
        text.setAttribute('width', '4');

        // Event listener hover dan klik
        sphere.addEventListener('mouseenter', () => {
            sphere.setAttribute('scale', '1.25 1.25 1.25');
            ring.setAttribute('scale', '1.15 1.15 1.15');
            playHoverSFX();
        });

        sphere.addEventListener('mouseleave', () => {
            sphere.setAttribute('scale', '1 1 1');
            ring.setAttribute('scale', '1 1 1');
        });

        sphere.addEventListener('click', () => {
            goToScene(hs.target);
        });

        el.appendChild(sphere);
        el.appendChild(ring);
        el.appendChild(text);
        container.appendChild(el);
    });
}

// Fungsi utama perpindahan panorama (teleportasi)
function goToScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) return;

    playTransitSFX();
    activeScene = sceneId;

    // Transisi visual pudar (fade out layar)
    const sky = document.getElementById('main-sky');
    let opacity = 1.0;
    
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.1;
        if (opacity <= 0.2) {
            clearInterval(fadeOutInterval);
            
            // Pindahkan gambar sky panorama & rotasi dasar
            sky.setAttribute('src', scene.image);
            sky.setAttribute('rotation', scene.rotation || "0 -90 0");
            
            // Build hotspot & perbarui HUD informasi 2D
            buildHotspots(sceneId);
            document.getElementById('current-scene-title').textContent = scene.title;
            
            // Tampilkan/Sembunyikan dasbor statistik BP2MI
            const statsPanel = document.getElementById('stats-panel');
            if (sceneId === 'view7' || sceneId === 'view8') {
                statsPanel.classList.remove('hidden');
            } else {
                statsPanel.classList.add('hidden');
            }

            // Tampilkan/Sembunyikan Panel Proyeksi 3D Hologram di VIEW 8
            const hologram3D = document.getElementById('hologram-panel-3d');
            if (sceneId === 'view8') {
                hologram3D.setAttribute('scale', '1 1 1');
            } else {
                hologram3D.setAttribute('scale', '0 0 0');
            }

            // Layar berangsur terang kembali (fade in)
            let fadeInOpacity = 0.2;
            const fadeInInterval = setInterval(() => {
                fadeInOpacity += 0.1;
                if (fadeInOpacity >= 1.0) {
                    clearInterval(fadeInInterval);
                }
            }, 50);
        }
    }, 40);
}

/* ==========================================
   LOGIKA INTERAKTIF DASBOR STATISTIK BP2MI (2D)
   ========================================== */
function switchStatsTab(tabId) {
    playHoverSFX();
    
    // Matikan semua tab dan konten
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Nyalakan tab dan konten yang dipilih
    event.target.classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

function selectDestination(id, total, name, desc) {
    playHoverSFX();
    
    const titleEl = document.getElementById('detail-country-title');
    const descEl = document.getElementById('detail-country-desc');
    
    titleEl.textContent = `${name} (${(total / 1000).toFixed(1)}K PMI)`;
    descEl.textContent = desc;
    
    // Highlight efek klik
    document.querySelectorAll('.bar-row').forEach(row => row.style.opacity = '0.6');
    event.currentTarget.style.opacity = '1';
}

/* ==========================================
   EVENT HANDLER UTAMA & DEPLOYMENT GATEWAY
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Bangun hotspot untuk lobi depan pada pemuatan awal
    buildHotspots('view1');

    const btnStart = document.getElementById('btn-start');
    const landingPage = document.getElementById('landing-page');
    const toggleMusicBtn = document.getElementById('btn-toggle-music');
    const toggleSFXBtn = document.getElementById('btn-toggle-sfx');

    // Klik tombol CTA Beranda
    btnStart.addEventListener('click', () => {
        const audioPreChecked = document.getElementById('pre-enable-audio').checked;
        musicEnabled = audioPreChecked;
        sfxEnabled = audioPreChecked;

        // Inisialisasi Audio Context
        if (musicEnabled || sfxEnabled) {
            initAudio();
        }

        // Jalankan transisi sinematik keluar dari Landing Page
        landingPage.classList.add('fade-out');

        // Perbarui visual tombol HUD di bagian bawah
        toggleMusicBtn.textContent = musicEnabled ? "🎵 Musik: AKTIF" : "🎵 Musik: MATI";
        toggleSFXBtn.textContent = sfxEnabled ? "🔊 SFX: AKTIF" : "🔊 SFX: MATI";
    });

    // Toggle Kontrol Musik Latar di HUD
    toggleMusicBtn.addEventListener('click', () => {
        musicEnabled = !musicEnabled;
        if (musicEnabled) {
            initAudio(); // Pastikan AudioContext diinisiasi
            startAmbientMusic();
            toggleMusicBtn.textContent = "🎵 Musik: AKTIF";
        } else {
            if (synthInterval) clearInterval(synthInterval);
            toggleMusicBtn.textContent = "🎵 Musik: MATI";
            // Setel tinggi visualizer kembali ke nol
            document.querySelectorAll('.vis-bar').forEach(b => b.style.height = '3px');
        }
    });

    // Toggle Kontrol SFX di HUD
    toggleSFXBtn.addEventListener('click', () => {
        sfxEnabled = !sfxEnabled;
        toggleSFXBtn.textContent = sfxEnabled ? "🔊 SFX: AKTIF" : "🔊 SFX: MATI";
    });
});
