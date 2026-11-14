/**
 * TRẠM KÝ ỨC 12A2 (NIÊN KHÓA 2026 - 2027)
 * ĐIỀU KHIỂN NHẠC NỀN LOFI THANH XUÂN (TỰ BẬT + TỰ TẮT KHI PHÁT VIDEO)
 * & HIỆU ỨNG ÂM THANH TƯƠNG TÁC ÊM DỊU, TRONG TRẺO
 */

window.SoundFX = {
    ctx: null,

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },

    // Âm thanh lật trang / mở thiệp / lật ảnh Polaroid: Tiếng chạm hợp âm Kalima/Chime gỗ ấm áp, dễ chịu
    playPaperFlip() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;

            // Hai nốt Kalimba ấm áp (C5 -> E5) rất nhẹ nhàng
            const freqs = [523.25, 659.25];
            freqs.forEach((f, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                const startTime = now + idx * 0.045;
                osc.frequency.setValueAtTime(f, startTime);

                gain.gain.setValueAtTime(0.001, startTime);
                gain.gain.linearRampToValueAtTime(0.065, startTime + 0.012);
                gain.gain.exponentialRampToValueAtTime(0.0008, startTime + 0.24);

                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.25);
            });
        } catch (e) {}
    },

    // Âm thanh bấm nút / chuyển kênh: Tiếng chạm gỗ trầm (Soft Wooden Tap) không bị rè
    playTvClick() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(340, now);
            osc.frequency.exponentialRampToValueAtTime(120, now + 0.045);

            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        } catch (e) {}
    },

    // Tiếng "tách" máy ảnh cơ nhẹ nhàng (Dùng cho Cuộn phim ngang)
    playShutterClick() {
        try {
            this.init();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;

            // Hai tiếng click cơ học rất ngắn (màn trập đóng - mở)
            [0, 0.055].forEach((offset, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                const t = now + offset;
                osc.frequency.setValueAtTime(idx === 0 ? 850 : 620, t);
                osc.frequency.exponentialRampToValueAtTime(140, t + 0.025);

                gain.gain.setValueAtTime(0.09, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.028);

                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(t);
                osc.stop(t + 0.03);
            });
        } catch (e) {}
    }
};

/* ==========================================================================
   QUẢN LÝ NHẠC NỀN LOFI THANH XUÂN (AUTO-PLAY & VIDEO DUCKING)
   ========================================================================== */
window.BgmController = {
    audioEl: null,
    btnEl: null,
    userWantsMusic: true, // Mặc định bật sẵn khi vào web
    pausedByVideo: false,

    init() {
        this.audioEl = document.getElementById('bgm-audio');
        this.btnEl = document.getElementById('btn-audio-toggle');
        if (!this.audioEl) return;

        this.audioEl.volume = 0.42;

        // Thử bật nhạc ngay khi trang vừa tải xong
        this.tryPlay();

        // Nếu trình duyệt chặn autoplay khi chưa chạm, bật ngay ở cú chạm đầu tiên vào màn hình
        const unlockOnFirstTouch = () => {
            if (this.userWantsMusic && !this.pausedByVideo && this.audioEl.paused) {
                this.tryPlay();
            }
            window.removeEventListener('pointerdown', unlockOnFirstTouch);
            window.removeEventListener('keydown', unlockOnFirstTouch);
        };
        window.addEventListener('pointerdown', unlockOnFirstTouch);
        window.addEventListener('keydown', unlockOnFirstTouch);

        if (this.btnEl) {
            this.btnEl.addEventListener('click', () => {
                this.userWantsMusic = !this.userWantsMusic;
                if (this.userWantsMusic) {
                    this.pausedByVideo = false;
                    this.tryPlay();
                } else {
                    this.audioEl.pause();
                }
                this.updateUI();
            });
        }
    },

    tryPlay() {
        if (!this.audioEl || !this.userWantsMusic || this.pausedByVideo) return;
        const playPromise = this.audioEl.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.updateUI();
            }).catch(() => {
                // Chờ người dùng chạm vào phong bì sẽ phát
                this.updateUI();
            });
        }
    },

    // Gọi khi Video bắt đầu phát -> Tạm dừng nhạc nền Lofi
    pauseForVideo() {
        if (!this.audioEl) return;
        this.pausedByVideo = true;
        if (!this.audioEl.paused) {
            this.audioEl.pause();
        }
        this.updateUI();
    },

    // Gọi khi Video dừng / kết thúc / hoặc chuyển sang trang khác -> Mở lại nhạc nền Lofi
    resumeAfterVideo() {
        if (!this.audioEl) return;
        if (this.pausedByVideo) {
            this.pausedByVideo = false;
            if (this.userWantsMusic) {
                this.tryPlay();
            }
        }
        this.updateUI();
    },

    updateUI() {
        if (!this.btnEl || !this.audioEl) return;
        const span = this.btnEl.querySelector('span');
        const icon = this.btnEl.querySelector('i');
        const isActuallyPlaying = this.userWantsMusic && !this.pausedByVideo;

        this.btnEl.classList.toggle('is-playing', isActuallyPlaying);
        if (icon) {
            icon.classList.toggle('fa-spin', isActuallyPlaying);
        }
        if (span) {
            if (!this.userWantsMusic) {
                span.textContent = 'Lofi: Tắt';
            } else if (this.pausedByVideo) {
                span.textContent = 'Lofi: Tạm dừng';
            } else {
                span.textContent = 'Lofi: Bật';
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.BgmController.init();
});
