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
            { position: "0.5 -1.2 -4", target: "view2", label: "Maju ke Depan", lookAt: "0 0 -1" },
            { position: "3.5 -1.2 -3", target: "v2", label: "Sayap Kayu Kanan", lookAt: "1 0 -0.8" },
            { position: "-3.5 -1.2 -3", target: "v2l", label: "Sayap Edukasi Kiri", lookAt: "-1 0 -0.8" }
        ]
    },
    "v2": {
        title: "Sayap Kanan (Motif Kayu)",
        image: "v2.jpg",
        description: "Booth kanan berpilar kayu estetis dengan logo 3D yang megah.",
        rotation: "0 -45 0",
        hotspots: [
            { position: "-2.5 -1.2 2.5", target: "view1", label: "Kembali ke Lobi", lookAt: "-0.8 0 1" },
            { position: "0 -1.2 -4", target: "view2", label: "Maju ke Meja Binawan", lookAt: "0 0 -1" }
        ]
    },
    "v2l": {
        title: "Sayap Kiri (Area Edukasi)",
        image: "v2l.jpg",
        description: "Booth edukasi sisi kiri dengan poster program penempatan luar negeri resmi.",
        rotation: "0 45 0",
        hotspots: [
            { position: "2.5 -1.2 2.5", target: "view1", label: "Kembali ke Lobi", lookAt: "0.8 0 1" },
            { position: "0 -1.2 -4", target: "view2", label: "Maju ke Meja Informasi", lookAt: "0 0 -1" }
        ]
    },
    "view2": {
        title: "Selasar Depan Booth Binawan",
        image: "view2.jpg",
        description: "Persimpangan utama lobi depan, berdekatan dengan meja konsultasi utama Binawan.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "-3.5 -1.2 -1.5", target: "v2l", label: "Geser ke Kiri", lookAt: "-1 0 0" },
            { position: "3.5 -1.2 -1.5", target: "v2", label: "Geser ke Kanan", lookAt: "1 0 0" },
            { position: "1.2 -1.2 -3", target: "view2b", label: "Meja Konsultasi Binawan", lookAt: "0.3 0 -1" },
            { position: "-1 -1.2 -4", target: "view3", label: "Masuk ke Ruang Tengah", lookAt: "-0.2 0 -1" }
        ]
    },
    "view2b": {
        title: "Meja Informasi Binawan Group",
        image: "view2b.jpg",
        description: "Area interaksi dan konsultasi langsung bagi pencari lowongan kerja di luar negeri.",
        rotation: "0 0 0",
        hotspots: [
            { position: "-2.5 -1.2 2.5", target: "view2", label: "Kembali ke Selasar", lookAt: "-0.8 0 1" },
            { position: "-1 -1.2 -4", target: "v3binawan", label: "Masuk Booth Binawan", lookAt: "-0.2 0 -1" }
        ]
    },
    "v3binawan": {
        title: "Interior Booth Binawan",
        image: "v3binawan.jpg",
        description: "Di dalam struktur kubah kuning-merah modern, pusat rekrutmen kesehatan.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 -1.2 4", target: "view2b", label: "Ke Meja Depan", lookAt: "0 0 1" },
            { position: "-3.5 -1.2 -2.5", target: "v4binawan", label: "Samping Meja Konsultasi", lookAt: "-1 0 -0.5" },
            { position: "2.5 -1.2 -3.5", target: "view3", label: "Jalan ke Ruang Tengah", lookAt: "0.6 0 -1" }
        ]
    },
    "v4binawan": {
        title: "Samping Meja Konsultasi Binawan",
        image: "v4binawan.jpg",
        description: "Area santai untuk konsultasi program pemagangan dan studi ke luar negeri.",
        rotation: "0 180 0",
        hotspots: [
            { position: "3 -1.2 3", target: "v3binawan", label: "Kembali ke Kubah", lookAt: "0.8 0 0.8" },
            { position: "-1.5 -1.2 -4", target: "view3", label: "Menuju Aula Tengah", lookAt: "-0.3 0 -1" }
        ]
    },
    "view3": {
        title: "Aula Tengah Paviliun",
        image: "view3.jpg",
        description: "Pusat pertemuan pameran dengan atap lengkung raksasa yang menyebarkan cahaya alami.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 -1.2 4", target: "view2", label: "Kembali ke Depan", lookAt: "0 0 1" },
            { position: "-3 -1.2 -3", target: "v4binawan", label: "Ke Area Binawan", lookAt: "-1 0 -1" },
            { position: "0 -1.2 -4", target: "view4", label: "Maju ke Transisi Tengah", lookAt: "0 0 -1" }
        ]
    },
    "view4": {
        title: "Ruang Transisi Tengah",
        image: "view4.jpg",
        description: "Selasar penghubung antara Area Binawan di depan dan Zona Polna-Aerowisata di belakang.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 -1.2 4", target: "view3", label: "Mundur ke Aula Tengah", lookAt: "0 0 1" },
            { position: "0 -1.2 -4", target: "view5", label: "Masuk Zona Polna & Aerowisata", lookAt: "0 0 -1" }
        ]
    },
    "view5": {
        title: "Zona Polna & Aerowisata",
        image: "view5.jpg",
        description: "Berdiri tepat di bawah lingkaran biru besar langit-langit, diapit maskapai Aerowisata & Polna.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "0 -1.2 4", target: "view4", label: "Mundur ke Tengah", lookAt: "0 0 1" },
            { position: "1.5 -1.2 -4", target: "view6", label: "Panggung Informasi Polna", lookAt: "0.3 0 -1" },
            { position: "-1.5 -1.2 -4", target: "view7", label: "Menuju Booth Resmi BP2MI", lookAt: "-0.3 0 -1" }
        ]
    },
    "view6": {
        title: "Panggung Booth Polna",
        image: "view6.jpg",
        description: "Area informasi edukasi sertifikasi kompetensi profesi pekerja migran.",
        rotation: "0 -120 0",
        hotspots: [
            { position: "-2 -1.2 3.5", target: "view5", label: "Kembali ke Tengah", lookAt: "-0.5 0 0.8" },
            { position: "-3 -1.2 -3.5", target: "view7", label: "Melangkah ke Booth BP2MI", lookAt: "-0.8 0 -0.8" }
        ]
    },
    "view7": {
        title: "Depan Paviliun BP2MI",
        image: "view7.jpg",
        description: "Selamat datang di Paviliun Kementerian Pelindungan Pekerja Migran Indonesia / BP2MI.",
        rotation: "0 -90 0",
        hotspots: [
            { position: "3 -1.2 3", target: "view5", label: "Kembali ke Selasar Tengah", lookAt: "0.8 0 0.8" },
            { position: "-3 -1.2 3", target: "view6", label: "Panggung Polna", lookAt: "-0.8 0 0.8" },
            { position: "0 -1.2 -4", target: "view8", label: "Masuk ke Pusat Data BP2MI", lookAt: "0 0 -1" }
        ]
    },
    "view8": {
        title: "Pusat Data BP2MI",
        image: "view8.jpg",
        description: "Ruang pemantauan data statistik PMI nasional dan sistem pelindungan terpadu.",
        rotation: "0 -10 0",
        hotspots: [
            { position: "0 -1.2 4", target: "view7", label: "Keluar ke Depan Booth", lookAt: "0 0 1" }
        ]
    }
};

/* ==========================================
   AUDIO PLAYER SYSTEM (MP3 BACKGROUND + PROCEDURAL SFX)
   ========================================== */
let audioCtx = null;
let musicEnabled = true;
let sfxEnabled = true;
let currentPreset = 'deep';
let synthInterval = null;

// Memuat lagu MP3 eksternal dari repositori
let bgMusic = new Audio('musik.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.45;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    startAmbientMusic();
}

function startAmbientMusic() {
    if (!musicEnabled) return;
    
    // Putar file lagu MP3 eksternal secara asinkron
    bgMusic.play().catch(err => {
        console.log("Menunggu interaksi pengguna pertama kali untuk memutar berkas musik.mp3");
    });

    // Sinkronisasi preset kecepatan lagu MP3 dengan tombol HUD
    syncMP3PlaybackRate();

    // Jalankan visualizer equalizer palsu yang disesuaikan dengan denyut musik
    if (synthInterval) clearInterval(synthInterval);
    synthInterval = setInterval(() => {
        if (musicEnabled) {
            animateVisualizer();
        }
    }, 1000);
}

function syncMP3PlaybackRate() {
    if (!bgMusic) return;
    if (currentPreset === 'deep') {
        bgMusic.playbackRate = 0.85; // Musik diperlambat, berkesan berat dan dalam
    } else if (currentPreset === 'cyber') {
        bgMusic.playbackRate = 1.0;  // Musik kecepatan normal fiksi ilmiah
    } else if (currentPreset === 'mystic') {
        bgMusic.playbackRate = 0.72; // Musik diperlambat ekstrim, berkesan magis & dreamy
    }
}

// Efek Suara (SFX) Hover (Beep lembut)
function playHoverSFX() {
    if (!sfxEnabled || !audioCtx) return;
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.08);
    
    gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
}

// Efek Suara (SFX) Melangkah / Dash Transisi Teleportasi (Warp Sweep)
function playTransitSFX() {
    if (!sfxEnabled || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.25); // Sapuan mendesing ke atas mensimulasikan gerak maju cepat

    filter.type = 'peaking';
    filter.Q.value = 3.0;
    filter.frequency.setValueAtTime(500, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.28);
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
        }, 600);
    });
}

function changePreset(preset, element) {
    currentPreset = preset;
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    } else {
        const fallbackBtn = document.querySelector(`.preset-btn[onclick*="'${preset}'"]`);
        if (fallbackBtn) fallbackBtn.classList.add('active');
    }
    playHoverSFX();
    syncMP3PlaybackRate();
}

/* ==========================================
   GOOGLE STREET VIEW SEAMLESS INTERACTION & TRANSITION
   ========================================== */
let activeScene = "view1";

function buildHotspots(sceneId) {
    const container = document.getElementById('hotspots-container');
    container.innerHTML = ''; // Kosongkan hotspot lama

    const currentScene = scenes[sceneId];
    if (!currentScene || !currentScene.hotspots) return;

    currentScene.hotspots.forEach(hs => {
        // Wrapper Entitas yang diletakkan datar di lantai (y = -1.2)
        const el = document.createElement('a-entity');
        el.setAttribute('position', hs.position);
        
        // 1. Google Street View / Matterport style flat circular pad (Cakram Lantai)
        const pad = document.createElement('a-ring');
        pad.setAttribute('radius-inner', '0.0');
        pad.setAttribute('radius-outer', '0.28');
        pad.setAttribute('color', '#00ffcc');
        pad.setAttribute('rotation', '-90 0 0'); // Berbaring datar di lantai
        pad.setAttribute('class', 'clickable');
        pad.setAttribute('material', 'shader: flat; transparent: true; opacity: 0.35; side: double; emissive: #00ffcc; emissiveIntensity: 1.0');
        
        // 2. Lingkaran cincin tipis bagian luar sebagai penegas visual
        const outerRing = document.createElement('a-ring');
        outerRing.setAttribute('radius-inner', '0.32');
        outerRing.setAttribute('radius-outer', '0.34');
        outerRing.setAttribute('color', '#00ffcc');
        outerRing.setAttribute('rotation', '-90 0 0');
        outerRing.setAttribute('material', 'shader: flat; transparent: true; opacity: 0.55; side: double');
        
        // 3. Efek Proyeksi Panah Penunjuk Arah (Chevron / Arrow) pointing to the next scene direction
        const arrow = document.createElement('a-triangle');
        arrow.setAttribute('vertex-a', '0 0.18 0');
        arrow.setAttribute('vertex-b', '-0.09 -0.1 0');
        arrow.setAttribute('vertex-c', '0.09 -0.1 0');
        arrow.setAttribute('color', '#ffffff');
        arrow.setAttribute('rotation', '-90 0 0'); // Menghadap datar di lantai
        arrow.setAttribute('position', '0 0.01 0'); // Sedikit di atas piringan
        arrow.setAttribute('material', 'shader: flat; transparent: true; opacity: 0.8');

        // 4. Papan Label Nama Lokasi Melayang Tipis di Atas Pad
        const textContainer = document.createElement('a-entity');
        textContainer.setAttribute('position', '0 0.35 0'); // Melayang 35cm di atas pad lantai
        textContainer.setAttribute('scale', '0.001 0.001 0.001'); // Mulai tidak kelihatan, membesar saat di-hover
        
        const labelText = document.createElement('a-text');
        labelText.setAttribute('value', hs.label.toUpperCase());
        labelText.setAttribute('align', 'center');
        labelText.setAttribute('color', '#00ffcc');
        labelText.setAttribute('width', '5');
        labelText.setAttribute('font', 'dejavu');
        labelText.setAttribute('wrap-count', '12');
        
        // Papan latar belakang label (glass-look panel)
        const labelPlate = document.createElement('a-plane');
        labelPlate.setAttribute('width', '1.6');
        labelPlate.setAttribute('height', '0.45');
        labelPlate.setAttribute('color', '#020512');
        labelPlate.setAttribute('material', 'transparent: true; opacity: 0.85; shader: flat');
        labelPlate.setAttribute('position', '0 0 -0.01');

        textContainer.appendChild(labelPlate);
        textContainer.appendChild(labelText);

        // --- ANIMASI & EVENT INTERAKSI SEAMLESS ---
        
        // Event Hover (Mouse Masuk / Gaze diarahkan)
        pad.addEventListener('mouseenter', () => {
            playHoverSFX();
            // Pad lantai berpendar jingga terang pertanda fokus
            pad.setAttribute('color', '#ff7b00');
            pad.setAttribute('material', 'opacity: 0.85; emissive: #ff7b00; emissiveIntensity: 1.5');
            outerRing.setAttribute('color', '#ff7b00');
            outerRing.setAttribute('scale', '1.1 1.1 1.1');
            arrow.setAttribute('scale', '1.2 1.2 1.2');
            
            // Pop up label nama tujuan secara mulus
            textContainer.setAttribute('animation', 'property: scale; to: 1 1 1; dur: 250; easing: easeOutBack');
        });

        // Event Hover Keluar
        pad.addEventListener('mouseleave', () => {
            pad.setAttribute('color', '#00ffcc');
            pad.setAttribute('material', 'opacity: 0.35; emissive: #00ffcc; emissiveIntensity: 1.0');
            outerRing.setAttribute('color', '#00ffcc');
            outerRing.setAttribute('scale', '1 1 1');
            arrow.setAttribute('scale', '1 1 1');
            
            // Sembunyikan kembali label nama tujuan
            textContainer.setAttribute('animation', 'property: scale; to: 0.001 0.001 0.001; dur: 200; easing: easeInQuad');
        });

        // Event Klik (Berjalan Mulus Ke Lokasi Baru)
        pad.addEventListener('click', () => {
            goToScene(hs.target);
        });

        el.appendChild(pad);
        el.appendChild(outerRing);
        el.appendChild(arrow);
        el.appendChild(textContainer);
        container.appendChild(el);
    });
}

// Fungsi utama perpindahan panorama dengan Efek Dash Teleportasi Mulus
function goToScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) return;

    playTransitSFX();
    activeScene = sceneId;

    const sky = document.getElementById('main-sky');
    
    // --- EFEK DASH SEAMLESS: ANIMASI SCALE & OPACITY BERBAUR ---
    // Mensimulasikan efek kita "maju menerobos" gambar panorama lama menuju ruangan baru
    sky.setAttribute('animation__scale', {
        property: 'scale',
        to: '1.25 1.25 1.25', // Zoom-in panorama lama untuk menciptakan ilusi gerakan fisik meluncur ke depan
        dur: 350,
        easing: 'easeInQuad'
    });
    
    sky.setAttribute('animation__fadeout', {
        property: 'material.opacity',
        to: '0.1',
        dur: 350,
        easing: 'easeInQuad'
    });

    // Jalankan pergantian gambar di tengah-tengah animasi dash
    setTimeout(() => {
        // Ganti gambar sky, rotasi awal, dan setel skala membesar dari jauh
        sky.setAttribute('src', scene.image);
        sky.setAttribute('rotation', scene.rotation || "0 -90 0");
        sky.setAttribute('scale', '1.25 1.25 1.25'); // Mulai dari ukuran membesar ruangan baru
        
        // Perbarui HUD and Hotspot
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

        // --- EFEK RECOVERY: MERAPAT MULUS KE PANORAMA BARU ---
        // Menurunkan skala sky kembali ke '1 1 1' (posisi normal) sambil memulihkan transparansi
        sky.removeAttribute('animation__scale');
        sky.removeAttribute('animation__fadeout');
        
        sky.setAttribute('animation__scalereset', {
            property: 'scale',
            to: '1 1 1',
            dur: 500,
            easing: 'easeOutQuad'
        });

        sky.setAttribute('animation__fadein', {
            property: 'material.opacity',
            to: '1',
            dur: 500,
            easing: 'easeOutQuad'
        });

        // Hapus tag animasi sisa setelah animasi tuntas agar tidak membebani memori
        setTimeout(() => {
            sky.removeAttribute('animation__scalereset');
            sky.removeAttribute('animation__fadein');
        }, 550);

    }, 360);
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
    } else {
        const activeBtn = document.querySelector(`.tab-btn[onclick*="'${tabId}'"]`);
        if (activeBtn) activeBtn.classList.add('active');
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
    } else {
        const targetRow = document.querySelector(`.bar-row[onclick*="'${id}'"]`);
        if (targetRow) targetRow.style.opacity = '1';
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
            startAmbientMusic();
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