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
   SOUND GENERATOR & MP3 BACKGROUND MUSIC PLAYER
   ========================================== */
let audioCtx = null;
let musicEnabled = true;
let sfxEnabled = true;
let currentPreset = 'deep';
let synthInterval = null;

// Buat Objek Audio Bawaan untuk memutar MP3 pilihan pengguna
let bgMusic = new Audio('musik.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.35; // Volume default yang nyaman

// Menginisiasi audio context (untuk SFX sintetis) dan memulai lagu MP3
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    startAmbientMusic();
}

function startAmbientMusic() {
    if (!musicEnabled) return;

    // Putar berkas MP3
    bgMusic.play().catch(err => {
        console.log("Menunggu tindakan klik pengguna untuk dapat memutar audio: ", err);
    });

    // Jalankan visualizer menari dinamis
    if (synthInterval) clearInterval(synthInterval);
    synthInterval = setInterval(() => {
        if (musicEnabled) {
            animateVisualizer();
        }
    }, 800);
}

// 2. Efek Suara Sintetis (SFX) Hover (Beep)
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

// 3. Efek Suara Sintetis (SFX) Klik Transit (Warp/Teleport)
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

// Visualizer Equalizer di HUD bawah
function animateVisualizer() {
    if (!musicEnabled) return;
    const bars = document.querySelectorAll('.vis-bar');
    bars.forEach(bar => {
        const randHeight = Math.floor(Math.random() * 16) + 3;
        bar.style.height = `${randHeight}px`;
        setTimeout(() => {
            bar.style.height = '3px';
        }, 500);
    });
}

// Menyesuaikan tempo putar MP3 berdasarkan preset yang dipilih
function changePreset(preset, element) {
    currentPreset = preset;
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    playHoverSFX();

    // Modifikasi tempo/playback rate MP3
    if (preset === 'deep') {
        bgMusic.playbackRate = 0.82; // Efek santai melambat
    } else if (preset === 'cyber') {
        bgMusic.playbackRate = 1.0;  // Normal
    } else if (preset === 'mystic') {
        bgMusic.playbackRate = 0.72; // Sangat lambat & dreamy
    }
}

/* ==========================================
   MANAJEMEN TRANSISI & NAVIGASI (PEMANDU HOLOGRAM 3D)
   ========================================== */
let activeScene = "view1";

// Membangun Hotspot Berbentuk Pemandu Manusia Hologram 3D Berjalan/Melayang
function buildHotspots(sceneId) {
    const container = document.getElementById('hotspots-container');
    container.innerHTML = ''; 

    const currentScene = scenes[sceneId];
    if (!currentScene || !currentScene.hotspots) return;

    currentScene.hotspots.forEach(hs => {
        // Wrapper entity utama
        const el = document.createElement('a-entity');
        el.setAttribute('position', hs.position);
        
        // Memecah koordinat position untuk animasi hovering vertikal yang lembut
        const posParts = hs.position.split(' ');
        const posX = parseFloat(posParts[0]);
        const posY = parseFloat(posParts[1]);
        const posZ = parseFloat(posParts[2]);
        
        // Berikan efek melayang (hovering up-down animation) pada pemandu
        el.setAttribute('animation', `property: position; to: ${posX} ${posY + 0.12} ${posZ}; dir: alternate; loop: true; dur: 2200; easing: easeInOutQuad`);

        // 1. Piringan Proyeksi Hologram di Lantai (Base Ring)
        const baseRing = document.createElement('a-ring');
        baseRing.setAttribute('radius-inner', '0.22');
        baseRing.setAttribute('radius-outer', '0.26');
        baseRing.setAttribute('color', '#00ffcc');
        baseRing.setAttribute('rotation', '-90 0 0');
        baseRing.setAttribute('position', '0 -0.65 0'); // Berada tepat di lantai virtual
        baseRing.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 0.8; shader: flat; side: double; transparent: true; opacity: 0.6');
        baseRing.setAttribute('animation', 'property: scale; to: 1.15 1.15 1.15; dir: alternate; loop: true; dur: 1100; easing: easeInOutSine');

        // 2. Badan Pemandu Manusia (Holographic Torso - Cone)
        const torso = document.createElement('a-cone');
        torso.setAttribute('radius-bottom', '0.14');
        torso.setAttribute('radius-top', '0.04');
        torso.setAttribute('height', '0.52');
        torso.setAttribute('position', '0 -0.2 0');
        torso.setAttribute('color', '#00ffcc');
        torso.setAttribute('class', 'clickable'); // Kelas target untuk mouse dan gaze pointer
        torso.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 1.5; shader: flat; transparent: true; opacity: 0.6');

        // 3. Kepala Pemandu Manusia (Holographic Head - Sphere)
        const head = document.createElement('a-sphere');
        head.setAttribute('radius', '0.095');
        head.setAttribute('position', '0 0.14 0');
        head.setAttribute('color', '#00ffcc');
        head.setAttribute('class', 'clickable');
        head.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 2.0; shader: flat; transparent: true; opacity: 0.75');

        // 4. Sabuk Orbit Cahaya Berputar (Dynamic Particle Belt)
        const belt = document.createElement('a-torus');
        belt.setAttribute('radius', '0.11');
        belt.setAttribute('radius-tubular', '0.008');
        belt.setAttribute('color', '#00ffcc');
        belt.setAttribute('position', '0 -0.42 0');
        belt.setAttribute('rotation', '90 0 0');
        belt.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 1.2; shader: flat; transparent: true; opacity: 0.5');

        // 5. Teks Petunjuk Melayang di Atas Kepala Pemandu
        const text = document.createElement('a-text');
        text.setAttribute('value', hs.label);
        text.setAttribute('align', 'center');
        text.setAttribute('position', '0 0.45 0');
        text.setAttribute('scale', '0.62 0.62 0.62');
        text.setAttribute('color', '#ffffff');
        text.setAttribute('font', 'dejavu');
        text.setAttribute('width', '4');

        // Gabungan Interaksi Hover & Click untuk Seluruh Anggota Tubuh Pemandu
        const guideParts = [torso, head];
        guideParts.forEach(part => {
            part.addEventListener('mouseenter', () => {
                // Berubah warna menjadi oranye menyala saat disentuh/hover
                torso.setAttribute('material', 'opacity: 0.9; emissiveIntensity: 2.5; color: #ff7b00');
                head.setAttribute('material', 'opacity: 0.95; emissiveIntensity: 3.0; color: #ff7b00');
                baseRing.setAttribute('color', '#ff7b00');
                baseRing.setAttribute('material', 'emissive: #ff7b00; emissiveIntensity: 1.5');
                playHoverSFX();
            });

            part.addEventListener('mouseleave', () => {
                // Kembali ke warna toska normal
                torso.setAttribute('material', 'opacity: 0.6; emissiveIntensity: 1.5; color: #00ffcc');
                head.setAttribute('material', 'opacity: 0.75; emissiveIntensity: 2.0; color: #00ffcc');
                baseRing.setAttribute('color', '#00ffcc');
                baseRing.setAttribute('material', 'emissive: #00ffcc; emissiveIntensity: 0.8');
            });

            part.addEventListener('click', () => {
                goToScene(hs.target);
            });
        });

        // Satukan komponen di dalam entity kontainer
        el.appendChild(baseRing);
        el.appendChild(torso);
        el.appendChild(head);
        el.appendChild(belt);
        el.appendChild(text);
        container.appendChild(el);
    });
}

function goToScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) return;

    playTransitSFX();
    activeScene = sceneId;

    const sky = document.getElementById('main-sky');
    let opacity = 1.0;
    
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.1;
        sky.setAttribute('material', 'opacity', opacity);
        
        if (opacity <= 0.2) {
            clearInterval(fadeOutInterval);
            
            sky.setAttribute('src', scene.image);
            sky.setAttribute('rotation', scene.rotation || "0 -90 0");
            
            buildHotspots(sceneId);
            document.getElementById('current-scene-title').textContent = scene.title;
            
            const statsPanel = document.getElementById('stats-panel');
            if (sceneId === 'view7' || sceneId === 'view8') {
                statsPanel.classList.remove('hidden');
            } else {
                statsPanel.classList.add('hidden');
            }

            const hologram3D = document.getElementById('hologram-panel-3d');
            if (sceneId === 'view8') {
                hologram3D.setAttribute('scale', '1 1 1');
            } else {
                hologram3D.setAttribute('scale', '0 0 0');
            }

            let fadeInOpacity = 0.2;
            const fadeInInterval = setInterval(() => {
                fadeInOpacity += 0.1;
                sky.setAttribute('material', 'opacity', fadeInOpacity);
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
function switchStatsTab(tabId, element) {
    playHoverSFX();
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    }
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

function selectDestination(id, total, name, desc, element) {
    playHoverSFX();
    
    const titleEl = document.getElementById('detail-country-title');
    const descEl = document.getElementById('detail-country-desc');
    
    titleEl.textContent = `${name} (${(total / 1000).toFixed(1)}K PMI)`;
    descEl.textContent = desc;
    
    document.querySelectorAll('.bar-row').forEach(row => row.style.opacity = '0.6');
    if (element) {
        element.style.opacity = '1';
    }
}

/* ==========================================
   EVENT HANDLER UTAMA & DEPLOYMENT GATEWAY
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    buildHotspots('view1');

    const btnStart = document.getElementById('btn-start');
    const landingPage = document.getElementById('landing-page');
    const toggleMusicBtn = document.getElementById('btn-toggle-music');
    const toggleSFXBtn = document.getElementById('btn-toggle-sfx');

    btnStart.addEventListener('click', () => {
        const audioPreChecked = document.getElementById('pre-enable-audio').checked;
        musicEnabled = audioPreChecked;
        sfxEnabled = audioPreChecked;

        if (musicEnabled || sfxEnabled) {
            initAudio();
        }

        landingPage.classList.add('fade-out');

        toggleMusicBtn.textContent = musicEnabled ? "🎵 Musik: AKTIF" : "🎵 Musik: MATI";
        toggleSFXBtn.textContent = sfxEnabled ? "🔊 SFX: AKTIF" : "🔊 SFX: MATI";
    });

    toggleMusicBtn.addEventListener('click', () => {
        musicEnabled = !musicEnabled;
        if (musicEnabled) {
            initAudio();
            toggleMusicBtn.textContent = "🎵 Musik: AKTIF";
        } else {
            bgMusic.pause();
            if (synthInterval) clearInterval(synthInterval);
            toggleMusicBtn.textContent = "🎵 Musik: MATI";
            document.querySelectorAll('.vis-bar').forEach(b => b.style.height = '3px');
        }
    });

    toggleSFXBtn.addEventListener('click', () => {
        sfxEnabled = !sfxEnabled;
        toggleSFXBtn.textContent = sfxEnabled ? "🔊 SFX: AKTIF" : "🔊 SFX: MATI";
    });
});