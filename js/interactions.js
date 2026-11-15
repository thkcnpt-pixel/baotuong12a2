/**
 * TRẠM KÝ ỨC 12A2 (NIÊN KHÓA 2026 - 2027)
 * LOGIC CHUYỂN CẢNH THUYẾT TRÌNH 3D, LẤP LÁNH MỖI TRANG & HIỆU ỨNG HÀNH ĐỘNG
 */

document.addEventListener('DOMContentLoaded', () => {
    initSparkleAndActionFX();
    initBookPageFlipSystem();
    initInteraction1_MagicEnvelope();
    initInteraction2_PolaroidFlip();
    initInteraction3_RetroTV();
    initInteraction4_Chalkboard();
    initInteraction6_ScratchCard();
    initInteraction7_PopupCard();
    initInteraction8_CipherPadlock();
    initInteraction5_UnsaidMailbox();
    initInteraction9_DragDropStickers();
    initInteraction10_FlashlightDarkroom();
    initInteraction11_HorizontalFilmReel();
});

/* ==========================================================================
   HỆ THỐNG HIỆU ỨNG LẤP LÁNH MỖI TRANG & PHÁO HOA TƯƠNG TÁC 3D (VISUAL FX ENGINE)
   ========================================================================== */
function initSparkleAndActionFX() {
    // 1. Tạo tầng hạt 3D toàn cục cho mọi thao tác bấm / vuốt / tương tác
    let particleLayer = document.querySelector('.fx-global-particle-layer');
    if (!particleLayer) {
        particleLayer = document.createElement('div');
        particleLayer.className = 'fx-global-particle-layer';
        document.body.appendChild(particleLayer);
    }

    // 2. Bơm bầu trời sao lấp lánh & đom đóm vàng (.page-sparkle-field) vào TẤT CẢ 12 TRANG
    const starSymbols = ['✦', '✧', '★', '✶', '✨'];
    document.querySelectorAll('.book-page').forEach((page) => {
        if (page.querySelector('.page-sparkle-field')) return;
        const field = document.createElement('div');
        field.className = 'page-sparkle-field';

        // 10 ngôi sao lấp lánh rải đều mỗi trang
        for (let i = 0; i < 10; i++) {
            const star = document.createElement('span');
            star.className = 'ambient-star';
            star.textContent = starSymbols[i % starSymbols.length];
            star.style.left = `${4 + Math.random() * 92}%`;
            star.style.top = `${6 + Math.random() * 88}%`;
            star.style.setProperty('--star-size', `${10 + Math.round(Math.random() * 9)}px`);
            star.style.setProperty('--twinkle-dur', `${2.4 + Math.random() * 2.8}s`);
            star.style.setProperty('--twinkle-delay', `${(Math.random() * 3).toFixed(2)}s`);
            field.appendChild(star);
        }

        // 8 đom đóm vàng bay lượn ấm áp trên mỗi trang
        for (let j = 0; j < 8; j++) {
            const fly = document.createElement('span');
            fly.className = 'ambient-firefly';
            fly.style.left = `${8 + Math.random() * 84}%`;
            fly.style.top = `${10 + Math.random() * 80}%`;
            fly.style.setProperty('--fly-size', `${5 + Math.round(Math.random() * 5)}px`);
            fly.style.setProperty('--fly-dur', `${4 + Math.random() * 3.5}s`);
            fly.style.setProperty('--fly-delay', `${(Math.random() * 3.5).toFixed(2)}s`);
            field.appendChild(fly);
        }

        page.insertBefore(field, page.firstChild);
    });

    const palettes = {
        gold: {
            symbols: ['✦', '★', '✨', '✧', '⭐', '💛'],
            colors: ['#ffd166', '#ffb703', '#fff3b0', '#f4a261', '#ffe8a3']
        },
        love: {
            symbols: ['💖', '✨', '💝', '✦', '🌸', '⭐'],
            colors: ['#ff758f', '#ffb3c1', '#ffd166', '#ff8fa3', '#ffe5ec']
        },
        neon: {
            symbols: ['⚡', '✦', '✨', '★', '◈', '✧'],
            colors: ['#00f5d4', '#ffd166', '#00bbf9', '#f15bb5', '#fee440']
        },
        celebrate: {
            symbols: ['🎉', '✨', '🏆', '★', '🎊', '🌟', '💖'],
            colors: ['#ffd166', '#06d6a0', '#ef476f', '#118ab2', '#ffbe0b']
        },
        chalk: {
            symbols: ['✦', '•', '✧', '⋆', '✨'],
            colors: ['#ffffff', '#ffd166', '#ff9ebb', '#7bdff2', '#b2f7ef']
        }
    };

    function spawnHalo(x, y) {
        const halo = document.createElement('div');
        halo.className = 'fx-click-halo';
        halo.style.setProperty('--hx', `${x}px`);
        halo.style.setProperty('--hy', `${y}px`);
        particleLayer.appendChild(halo);
        setTimeout(() => halo.remove(), 540);
    }

    function burstAt(x, y, options = {}) {
        const count = options.count || 12;
        const preset = palettes[options.theme || 'gold'] || palettes.gold;
        const symbols = options.symbols || preset.symbols;
        const colors = options.colors || preset.colors;
        const spread = options.spread || 85;
        const showHalo = options.halo !== false;

        if (showHalo) spawnHalo(x, y);

        for (let i = 0; i < count; i++) {
            const p = document.createElement('span');
            p.className = 'fx-action-particle';
            p.textContent = symbols[Math.floor(Math.random() * symbols.length)];

            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.55;
            const dist = spread * (0.45 + Math.random() * 0.75);
            const dx = Math.cos(angle) * dist;
            const dy = Math.sin(angle) * dist - (options.lift || 18);
            const dz = Math.round((Math.random() - 0.3) * 140);
            const rot = Math.round((Math.random() - 0.5) * 380);
            const dur = Math.round(520 + Math.random() * 340);
            const size = Math.round((options.minSize || 12) + Math.random() * (options.maxSize || 10));
            const color = colors[Math.floor(Math.random() * colors.length)];

            p.style.setProperty('--x0', `${x}px`);
            p.style.setProperty('--y0', `${y}px`);
            p.style.setProperty('--x1', `${x + dx}px`);
            p.style.setProperty('--y1', `${y + dy}px`);
            p.style.setProperty('--z1', `${dz}px`);
            p.style.setProperty('--r1', `${rot}deg`);
            p.style.setProperty('--s1', (0.85 + Math.random() * 0.75).toFixed(2));
            p.style.setProperty('--p-dur', `${dur}ms`);
            p.style.setProperty('--p-size', `${size}px`);
            p.style.setProperty('--p-color', color);

            particleLayer.appendChild(p);
            setTimeout(() => p.remove(), dur + 40);
        }
    }

    function burstElement(el, options = {}) {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        burstAt(cx, cy, options);

        if (options.pop !== false) {
            el.classList.remove('fx-action-pop');
            void el.offsetWidth;
            el.classList.add('fx-action-pop');
        }
    }

    function animatePageEntrance(pageEl) {
        if (!pageEl) return;
        const selectors = [
            '.section-heading',
            '.section-desc',
            '.cover-ornament-border > *',
            '.polaroid-card',
            '.retro-tv-cabinet',
            '.chalk-subject-card',
            '.chalkboard-frame',
            '.scratch-toolbar',
            '.scratch-card-container',
            '.popup-controls',
            '.popup-scene-wrapper',
            '.padlock-unit',
            '.secret-vault',
            '.confession-form',
            '.confession-note',
            '.sticker-board-toolbar',
            '.corkboard-stage',
            '.flashlight-toolbar',
            '.darkroom-container',
            '.film-controls-bar',
            '.film-strip-viewport'
        ];
        const items = pageEl.querySelectorAll(selectors.join(','));
        items.forEach((item, idx) => {
            item.classList.remove('fx-stagger-item');
            void item.offsetWidth;
            item.style.setProperty('--stagger-delay', `${Math.min(idx * 0.045, 0.36).toFixed(3)}s`);
            item.classList.add('fx-stagger-item');
        });
    }

    function burstStageTransition(stageEl) {
        if (!stageEl) return;
        const rect = stageEl.getBoundingClientRect();
        if (rect.width === 0) return;
        // Bắn 2 chùm sao lấp lánh hai bên mép trang sách khi chuyển cảnh 3D
        burstAt(rect.left + rect.width * 0.25, rect.top + rect.height * 0.35, {
            count: 9,
            spread: 95,
            theme: 'gold',
            halo: false
        });
        burstAt(rect.left + rect.width * 0.75, rect.top + rect.height * 0.35, {
            count: 9,
            spread: 95,
            theme: 'gold',
            halo: false
        });
    }

    window.VisualFX = {
        burstAt,
        burstElement,
        animatePageEntrance,
        burstStageTransition
    };

    // 3. Tự động gắn hiệu ứng lấp lánh + nảy 3D cho MỌI nút bấm & thao tác chạm trên toàn trang
    document.addEventListener('pointerdown', (e) => {
        const interactive = e.target.closest(
            'button, .vintage-btn, .bookmark-tab, .tv-ch-pill, .chalk-piece, .riddle-tab, .polaroid-card, .film-frame-card'
        );
        if (interactive) {
            burstAt(e.clientX, e.clientY, {
                count: 10,
                spread: 64,
                theme: 'gold',
                minSize: 11,
                maxSize: 8
            });
            if (interactive.matches('button, .vintage-btn, .bookmark-tab, .tv-ch-pill, .chalk-piece, .riddle-tab')) {
                interactive.classList.remove('fx-action-pop');
                void interactive.offsetWidth;
                interactive.classList.add('fx-action-pop');
            }
        }
    }, { passive: true });
}

/* ==========================================================================
   HÀM DỪNG TRIỆT ĐỂ MỌI VIDEO KHI CHUYỂN TRANG (CHỐNG LỖI VỌNG TIẾNG VIDEO)
   ========================================================================== */
function stopAllVideosOnPageLeave() {
    const videoEl = document.getElementById('tv-video-player');
    const youtubeEl = document.getElementById('tv-youtube-iframe');

    if (videoEl && !videoEl.paused) {
        videoEl.pause();
    }

    if (youtubeEl && youtubeEl.src) {
        // Gửi lệnh pause qua postMessage và ngắt src nếu đang chạy ẩn
        try {
            youtubeEl.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } catch (e) {}
        if (!youtubeEl.classList.contains('hidden')) {
            const savedSrc = youtubeEl.getAttribute('data-src') || youtubeEl.src;
            youtubeEl.setAttribute('data-src', savedSrc);
            youtubeEl.src = '';
            youtubeEl.src = savedSrc;
        }
    }

    // Khôi phục nhạc nền Lofi Thanh Xuân ngay khi rời trang Video
    if (window.BgmController) {
        window.BgmController.resumeAfterVideo();
    }
}

/* ==========================================================================
   HỆ THỐNG CHUYỂN TRANG THUYẾT TRÌNH 3D ĐA HIỆU ỨNG (8 3D PRESENTATION TRANSITIONS)
   ========================================================================== */
function initBookPageFlipSystem() {
    const stage3D = document.querySelector('.book-stage-3d');
    const pages = Array.from(document.querySelectorAll('.book-page'));
    const bookmarks = Array.from(document.querySelectorAll('.bookmark-tab'));
    const indicatorEl = document.getElementById('book-page-indicator');
    const prevBtnTop = document.getElementById('btn-prev-page');
    const nextBtnTop = document.getElementById('btn-next-page');
    const prevBtnBottom = document.getElementById('btn-prev-page-bottom');
    const nextBtnBottom = document.getElementById('btn-next-page-bottom');

    if (!pages.length) return;

    // Danh sách 8 kiểu chuyển cảnh thuyết trình 3D sống động
    const transitionStyles = [
        { key: 'cube', label: '🎲 Khối Lập Phương 3D (Cube Spin)' },
        { key: 'carousel', label: '🎠 Băng Chuyền 3D (Coverflow)' },
        { key: 'portal', label: '🌌 Cổng Không Gian 3D (Portal Zoom)' },
        { key: 'origami', label: '🦢 Gấp Giấy Origami 3D (Unfold)' },
        { key: 'vortex', label: '🌀 Xoáy Lốc Ngân Hà 3D (Vortex)' },
        { key: 'door', label: '🚪 Cánh Cửa Thời Gian 3D (Grand Door)' },
        { key: 'cards', label: '🃏 Tráo Bài Ma Thuật 3D (Deck Toss)' },
        { key: 'prism', label: '💎 Lăng Kính Ánh Sáng 3D (Prism Flip)' }
    ];

    const allFxClasses = [];
    transitionStyles.forEach((t) => {
        allFxClasses.push(
            `fx-${t.key}-next-in`,
            `fx-${t.key}-next-out`,
            `fx-${t.key}-prev-in`,
            `fx-${t.key}-prev-out`
        );
    });

    let cleanupTimer = null;
    let transitionCounter = 0;

    let currentPage = 0;
    const totalPages = pages.length;

    // Khởi chạy hiệu ứng xuất hiện 3D cho trang đầu tiên
    if (window.VisualFX) {
        window.VisualFX.animatePageEntrance(pages[0]);
    }

    function goToPage(targetIndex) {
        if (targetIndex < 0 || targetIndex >= totalPages || targetIndex === currentPage) return;

        const direction = targetIndex > currentPage ? 'next' : 'prev';
        const oldPage = pages[currentPage];
        const newPage = pages[targetIndex];

        // Chọn kiểu chuyển cảnh 3D đa dạng (kết hợp chỉ số trang và bộ đếm để mỗi lần chuyển trang đều mới mẻ)
        const styleObj = transitionStyles[(targetIndex + transitionCounter) % transitionStyles.length];
        transitionCounter++;

        // 1. Dừng ngay mọi video nếu đang phát ở trang cũ
        stopAllVideosOnPageLeave();

        // 2. Phát âm thanh lật trang êm dịu
        if (window.SoundFX) window.SoundFX.playPaperFlip();

        // 3. Quét luồng sáng vàng & bắn hạt sao lấp lánh ngang sân khấu 3D
        if (stage3D) {
            stage3D.classList.remove('stage-light-sweep');
            void stage3D.offsetWidth;
            stage3D.classList.add('stage-light-sweep');
            if (window.VisualFX) window.VisualFX.burstStageTransition(stage3D);
        }

        if (cleanupTimer) clearTimeout(cleanupTimer);

        // 4. Chạy đồng thời hiệu ứng 3D Thoát ra (trang cũ) và 3D Bay vào (trang mới)
        pages.forEach((page, idx) => {
            page.classList.remove('is-active', 'is-exiting', 'flip-next-in', 'flip-prev-in', ...allFxClasses);
            if (idx === currentPage) {
                page.classList.add('is-exiting');
            } else if (idx === targetIndex) {
                page.classList.add('is-active');
            }
        });

        // Ép trình duyệt cập nhật layout display:block trước khi gắn class animation 3D để không bị bỏ qua khung hình đầu
        if (oldPage) void oldPage.offsetWidth;
        if (newPage) void newPage.offsetWidth;

        if (oldPage) oldPage.classList.add(`fx-${styleObj.key}-${direction}-out`);
        if (newPage) newPage.classList.add(`fx-${styleObj.key}-${direction}-in`);

        cleanupTimer = setTimeout(() => {
            if (oldPage) {
                oldPage.classList.remove('is-exiting', ...allFxClasses);
            }
            if (newPage) {
                newPage.classList.remove(...allFxClasses);
            }
        }, 840);

        currentPage = targetIndex;

        // 5. Kích hoạt hiệu ứng xuất hiện 3D so le cho các vật thể bên trong trang mới
        if (window.VisualFX) {
            window.VisualFX.animatePageEntrance(newPage);
        }

        // 6. Cập nhật thanh Mục lục Bookmark & tự động trượt ngang tới tab đang mở
        bookmarks.forEach((tab, idx) => {
            const isActive = idx === currentPage;
            tab.classList.toggle('active', isActive);
            if (isActive && typeof tab.scrollIntoView === 'function') {
                tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });

        // 7. Cập nhật tiêu đề số trang và trạng thái nút Trước / Tiếp
        if (indicatorEl) {
            indicatorEl.innerHTML = `Trang <strong>${currentPage + 1} / ${totalPages}</strong>`;
        }

        const isFirst = currentPage === 0;
        const isLast = currentPage === totalPages - 1;
        if (prevBtnTop) prevBtnTop.disabled = isFirst;
        if (prevBtnBottom) prevBtnBottom.disabled = isFirst;
        if (nextBtnTop) nextBtnTop.disabled = isLast;
        if (nextBtnBottom) nextBtnBottom.disabled = isLast;

        // 8. Khởi tạo lại kích thước Canvas nếu người dùng lật tới trang Bảng Đen hoặc Thẻ Cào
        const activePageId = pages[currentPage].id;
        requestAnimationFrame(() => {
            if (typeof window.refreshChalkboardCanvas === 'function' && activePageId === 'chalkboard-section') {
                window.refreshChalkboardCanvas();
            }
            if (typeof window.refreshScratchCanvas === 'function' && activePageId === 'scratch-card-section') {
                window.refreshScratchCanvas();
            }
        });
    }

    if (prevBtnTop) prevBtnTop.addEventListener('click', () => goToPage(currentPage - 1));
    if (nextBtnTop) nextBtnTop.addEventListener('click', () => goToPage(currentPage + 1));
    if (prevBtnBottom) prevBtnBottom.addEventListener('click', () => {
        goToPage(currentPage - 1);
        document.getElementById('book-bookmarks-bar')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    if (nextBtnBottom) nextBtnBottom.addEventListener('click', () => {
        goToPage(currentPage + 1);
        document.getElementById('book-bookmarks-bar')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    bookmarks.forEach((tab) => {
        tab.addEventListener('click', () => {
            const idx = parseInt(tab.getAttribute('data-page'), 10);
            if (!isNaN(idx)) goToPage(idx);
        });
    });

    // Các nút chuyển trang nhanh trong Trang Mở Đầu & Trang Kết Thúc (.js-goto-page)
    document.querySelectorAll('.js-goto-page').forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetIdx = parseInt(btn.getAttribute('data-target-page'), 10);
            if (!isNaN(targetIdx)) goToPage(targetIdx);
        });
    });
}

/* ==========================================================================
   TƯƠNG TÁC 1: PHONG BÌ MA THUẬT (MẶC ĐỊNH GẤP KÍN ĐỂ NGƯỜI XEM TỰ MỞ)
   ========================================================================== */
function initInteraction1_MagicEnvelope() {
    const overlay = document.getElementById('envelope-intro-container');
    const envelope = document.getElementById('magic-envelope');
    const enterBtn = document.getElementById('btn-enter-scrapbook');

    if (!overlay || !envelope) return;

    function openEnvelope() {
        if (!envelope.classList.contains('is-open')) {
            envelope.classList.add('is-open');
            if (window.SoundFX) window.SoundFX.playPaperFlip();
            if (window.BgmController) window.BgmController.tryPlay();
            if (window.VisualFX) {
                window.VisualFX.burstElement(envelope, {
                    count: 26,
                    spread: 145,
                    theme: 'celebrate',
                    pop: false
                });
            }
        }
    }

    function dismissOverlay(e) {
        if (e) e.stopPropagation();
        if (window.SoundFX) window.SoundFX.playPaperFlip();
        if (window.BgmController) window.BgmController.tryPlay();
        if (window.VisualFX && enterBtn) {
            window.VisualFX.burstElement(enterBtn, {
                count: 24,
                spread: 130,
                theme: 'gold'
            });
        }
        overlay.classList.add('is-dismissed');
    }

    envelope.addEventListener('click', openEnvelope);
    envelope.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEnvelope();
        }
    });

    if (enterBtn) {
        enterBtn.addEventListener('click', dismissOverlay);
    }
}

/* ==========================================================================
   TƯƠNG TÁC 2: GÓC ẢNH POLAROID LẬT 3D (BUNG TIM & SAO LẤP LÁNH KHI LẬT)
   ========================================================================== */
function initInteraction2_PolaroidFlip() {
    const cards = document.querySelectorAll('.polaroid-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
            if (window.SoundFX) window.SoundFX.playPaperFlip();
            if (window.VisualFX) {
                window.VisualFX.burstElement(card, {
                    count: 16,
                    spread: 95,
                    theme: 'love',
                    pop: false
                });
            }
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('is-flipped');
                if (window.SoundFX) window.SoundFX.playPaperFlip();
                if (window.VisualFX) {
                    window.VisualFX.burstElement(card, {
                        count: 16,
                        spread: 95,
                        theme: 'love',
                        pop: false
                    });
                }
            }
        });
    });
}


/* ==========================================================================
   TƯƠNG TÁC 3: THƯỚC PHIM TUA NGƯỢC (TỰ ĐỘNG TẮT/BẬT NHẠC NỀN KHI PHÁT VIDEO)
   ========================================================================== */
function initInteraction3_RetroTV() {
    const channels = [
        { code: '01', label: 'CH-01 • HỘI TRẠI 12A2', title: 'Khoảnh khắc vui nhộn của 12A2 (Băng #1)', type: 'video', src: 'assets/video/video_01.mp4' },
        { code: '02', label: 'CH-02 • NỤ CƯỜI TUỔI 18', title: 'Hậu trường lớp học siêu lầy (Băng #2)', type: 'video', src: 'assets/video/video_02.mp4' },
        { code: '03', label: 'CH-03 • THANH XUÂN RỰC RỠ', title: 'Kỷ niệm bên nhau dưới mái trường (Băng #3)', type: 'video', src: 'assets/video/video_03.mp4' },
        { code: '04', label: 'CH-04 • GÓC LỚP THÂN QUEN', title: 'Tiếng cười giờ ra chơi 12A2 (Băng #4)', type: 'video', src: 'assets/video/video_04.mp4' },
        { code: '05', label: 'CH-05 • CHÁY HẾT MÌNH', title: 'Hoạt động tập thể 12A2 (Băng #5)', type: 'video', src: 'assets/video/video_05.mp4' },
        { code: '06', label: 'CH-06 • KÝ ỨC ĐẸP NHẤT', title: 'Thước phim thanh xuân 12A2 (Băng #6)', type: 'video', src: 'assets/video/video_06.mp4' },
        { code: '07', label: 'CH-07 • ĐỒNG ĐỘI 12A2', title: 'Cùng nhau tạo nên kỷ niệm (Băng #7)', type: 'video', src: 'assets/video/video_07.mp4' },
        { code: '08', label: 'CH-08 • NGÀY NẮNG ĐẸP', title: 'Sân trường Phú Điền rực rỡ (Băng #8)', type: 'video', src: 'assets/video/video_08.mp4' },
        { code: '09', label: 'CH-09 • TUỔI TRẺ CUỒNG NHIỆT', title: 'Không khí náo nhiệt của 12A2 (Băng #9)', type: 'video', src: 'assets/video/video_09.mp4' },
        { code: '10', label: 'CH-10 • NHỮNG NỤ CƯỜI', title: 'Lưu giữ từng giây phút bên nhau (Băng #10)', type: 'video', src: 'assets/video/video_10.mp4' },
        { code: '11', label: 'CH-11 • TẠM BIỆT CẤP 3', title: 'Hành trình khép lại mở ra tương lai (Băng #11)', type: 'video', src: 'assets/video/video_11.mp4' },
        { code: 'YT', label: 'CH-YT • YOUTUBE KỶ NIỆM', title: 'Khung nhúng YouTube Không Công Khai', type: 'youtube', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1&rel=0' }
    ];

    let currentIndex = 0;

    const videoEl = document.getElementById('tv-video-player');
    const youtubeEl = document.getElementById('tv-youtube-iframe');
    const noiseEl = document.getElementById('tv-static-noise');
    const osdEl = document.getElementById('tv-osd-channel');
    const ledEl = document.getElementById('tv-channel-led');
    const titleEl = document.getElementById('tv-channel-title');
    const prevBtn = document.getElementById('btn-tv-prev');
    const nextBtn = document.getElementById('btn-tv-next');
    const pills = document.querySelectorAll('.tv-ch-pill');

    if (!videoEl || !youtubeEl) return;

    // Tự động tắt nhạc nền Lofi khi video phát & mở lại khi video dừng/kết thúc
    videoEl.addEventListener('play', () => {
        if (window.BgmController) window.BgmController.pauseForVideo();
    });

    videoEl.addEventListener('pause', () => {
        if (window.BgmController) window.BgmController.resumeAfterVideo();
    });

    videoEl.addEventListener('ended', () => {
        if (window.BgmController) window.BgmController.resumeAfterVideo();
    });

    function switchChannel(index, autoPlayNow = true) {
        currentIndex = (index + channels.length) % channels.length;
        const ch = channels[currentIndex];

        if (window.SoundFX) window.SoundFX.playTvClick();

        if (noiseEl) {
            noiseEl.classList.add('is-active');
            setTimeout(() => noiseEl.classList.remove('is-active'), 220);
        }

        if (window.VisualFX && ledEl) {
            window.VisualFX.burstElement(ledEl, {
                count: 14,
                spread: 85,
                theme: 'neon',
                pop: false
            });
        }

        if (osdEl) osdEl.textContent = ch.label;
        if (ledEl) ledEl.textContent = ch.code;
        if (titleEl) titleEl.textContent = ch.title;

        pills.forEach((pill, idx) => {
            pill.classList.toggle('active', idx === currentIndex);
        });

        if (ch.type === 'video') {
            youtubeEl.src = '';
            youtubeEl.classList.add('hidden');
            videoEl.classList.remove('hidden');
            videoEl.pause();

            // Cập nhật trực tiếp cả thẻ <source> lẫn thuộc tính src để trình duyệt nạp đúng khung hình đầu tiên
            const sourceTag = videoEl.querySelector('source');
            if (sourceTag) sourceTag.src = ch.src;
            videoEl.src = ch.src;
            videoEl.currentTime = 0;
            videoEl.load();

            if (autoPlayNow) {
                const startPlayback = () => {
                    const p = videoEl.play();
                    if (p !== undefined) {
                        p.then(() => {
                            if (window.BgmController) window.BgmController.pauseForVideo();
                        }).catch(() => {});
                    }
                };
                if (videoEl.readyState >= 2) {
                    startPlayback();
                } else {
                    videoEl.addEventListener('loadeddata', startPlayback, { once: true });
                }
            }
        } else {
            videoEl.pause();
            videoEl.classList.add('hidden');
            youtubeEl.classList.remove('hidden');
            youtubeEl.src = ch.src;
            if (window.BgmController) window.BgmController.pauseForVideo();
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => switchChannel(currentIndex - 1, true));
    if (nextBtn) nextBtn.addEventListener('click', () => switchChannel(currentIndex + 1, true));

    pills.forEach((pill) => {
        pill.addEventListener('click', () => {
            const idx = parseInt(pill.getAttribute('data-index'), 10);
            switchChannel(idx, true);
        });
    });
}

/* ==========================================================================
   TƯƠNG TÁC 4: GÓC BẢNG ĐEN LỚP HỌC (VẼ PHẤN TRỰC TIẾP LÊN BẢNG + BỤI PHẤN LẤP LÁNH)
   ========================================================================== */
function initInteraction4_Chalkboard() {
    const canvas = document.getElementById('chalkboard-canvas');
    const surface = document.getElementById('chalkboard-surface');
    const clearBtn = document.getElementById('btn-clear-chalk');
    const colorBtns = document.querySelectorAll('.chalk-piece');

    if (!canvas || !surface) return;
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let chalkColor = '#f2f0e6';
    let lastX = 0;
    let lastY = 0;
    let chalkSparkleTick = 0;

    function resizeCanvas() {
        const rect = surface.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            canvas.width = rect.width;
            canvas.height = rect.height;
        }
    }

    window.refreshChalkboardCanvas = resizeCanvas;
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top,
            clientX,
            clientY
        };
    }

    function startDraw(e) {
        if (canvas.width === 0) resizeCanvas();
        isDrawing = true;
        const pos = getPos(e);
        lastX = pos.x;
        lastY = pos.y;
    }

    function draw(e) {
        if (!isDrawing) return;
        const pos = getPos(e);
        ctx.strokeStyle = chalkColor;
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        chalkSparkleTick++;
        if (chalkSparkleTick % 4 === 0 && window.VisualFX && pos.clientX) {
            window.VisualFX.burstAt(pos.clientX, pos.clientY, {
                count: 3,
                spread: 32,
                theme: 'chalk',
                colors: [chalkColor, '#ffd166', '#ffffff'],
                minSize: 8,
                maxSize: 6,
                halo: false
            });
        }

        lastX = pos.x;
        lastY = pos.y;
    }

    function stopDraw() {
        isDrawing = false;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: true });
    canvas.addEventListener('touchmove', draw, { passive: true });
    window.addEventListener('touchend', stopDraw);

    colorBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            colorBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            chalkColor = btn.getAttribute('data-color') || '#f2f0e6';
            if (window.SoundFX) window.SoundFX.playTvClick();
        });
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (window.SoundFX) window.SoundFX.playPaperFlip();
            if (window.VisualFX) {
                window.VisualFX.burstElement(surface, {
                    count: 18,
                    spread: 120,
                    theme: 'chalk',
                    pop: false
                });
            }
        });
    }
}

/* ==========================================================================
   TƯƠNG TÁC 6: THẺ CÀO KÝ ỨC (HTML5 CANVAS SCRATCH CARD - CÀO MƯỢT & BẮN SAO VÀNG)
   ========================================================================== */
function initInteraction6_ScratchCard() {
    const canvas = document.getElementById('scratch-canvas');
    const container = document.getElementById('scratch-card-container');
    const badgeEl = document.getElementById('scratch-progress-badge');
    const revealBtn = document.getElementById('btn-scratch-reveal');
    const resetBtn = document.getElementById('btn-scratch-reset');

    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let isScratching = false;
    let isInitialized = false;
    let lastPos = null;
    let scratchSparkleTick = 0;

    function fillFogLayer() {
        const rect = container.getBoundingClientRect();
        // Nếu trang đang ẩn (rect.width === 0) thì chưa khởi tạo vội, chờ khi lật tới trang mới lấy đúng kích thước thật
        if (rect.width === 0 || rect.height === 0) return;

        const w = Math.round(rect.width);
        const h = Math.round(rect.height);
        canvas.width = w;
        canvas.height = h;
        canvas.classList.remove('is-cleared');

        ctx.globalCompositeOperation = 'source-over';
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, '#c8b89e');
        grad.addColorStop(0.5, '#a8967a');
        grad.addColorStop(1, '#cbbba0');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
        for (let i = 0; i < 80; i++) {
            ctx.fillRect(Math.random() * w, Math.random() * h, 3, 3);
        }

        const titleFontSize = w < 420 ? 14 : 20;
        const subFontSize = w < 420 ? 12 : 15;
        ctx.fillStyle = '#3b2818';
        ctx.font = `bold ${titleFontSize}px "Special Elite", monospace`;
        ctx.textAlign = 'center';
        ctx.fillText('✨ CÀO LỚP NHŨ ĐỂ MỞ KÝ ỨC 12A2 ✨', w / 2, h / 2 - 8);
        ctx.font = `${subFontSize}px "Pangolin", cursive`;
        ctx.fillText('(Cào khoảng một nửa mặt thẻ để bức ảnh hiện ra!)', w / 2, h / 2 + 16);

        if (badgeEl) badgeEl.innerHTML = 'Đã cào mở: <strong>0%</strong>';
        isInitialized = true;
    }

    window.refreshScratchCanvas = () => {
        const rect = container.getBoundingClientRect();
        if (!isInitialized || Math.abs(canvas.width - rect.width) > 10) {
            fillFogLayer();
        }
    };

    fillFogLayer();

    function getPointerPos(e) {
        const rect = canvas.getBoundingClientRect();
        const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
        const clientX = touch ? touch.clientX : e.clientX;
        const clientY = touch ? touch.clientY : e.clientY;
        const scaleX = rect.width ? canvas.width / rect.width : 1;
        const scaleY = rect.height ? canvas.height / rect.height : 1;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY,
            clientX,
            clientY
        };
    }

    function scratchStroke(pos) {
        ctx.globalCompositeOperation = 'destination-out';
        // Giảm bán kính nét cào xuống còn một nửa so với trước (6% chiều rộng thẻ) để cào lâu và thú vị hơn
        const brushRadius = Math.max(24, Math.round(canvas.width * 0.06));

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = brushRadius * 2;

        ctx.beginPath();
        if (lastPos) {
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, brushRadius, 0, Math.PI * 2);
        ctx.fill();

        scratchSparkleTick++;
        if (scratchSparkleTick % 3 === 0 && window.VisualFX && pos.clientX) {
            window.VisualFX.burstAt(pos.clientX, pos.clientY, {
                count: 4,
                spread: 42,
                theme: 'gold',
                minSize: 10,
                maxSize: 8,
                halo: false
            });
        }

        lastPos = pos;
        updateProgress();
    }

    function updateProgress() {
        if (canvas.classList.contains('is-cleared')) return;
        try {
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let transparentPixels = 0;
            const step = 16;
            const totalSampled = imgData.length / (4 * step);

            for (let i = 3; i < imgData.length; i += 4 * step) {
                if (imgData[i] < 128) transparentPixels++;
            }

            const rawPercent = Math.round((transparentPixels / totalSampled) * 100);
            // Quy đổi: Cần cào thật 50% diện tích mặt thẻ mới đạt 100% và bung sáng toàn bộ bức ảnh
            const displayPercent = Math.min(100, Math.round((rawPercent / 50) * 100));
            if (badgeEl) badgeEl.innerHTML = `Đã cào mở: <strong>${displayPercent}%</strong>`;

            if (rawPercent >= 50) {
                canvas.classList.add('is-cleared');
                if (badgeEl) badgeEl.innerHTML = 'Đã cào mở: <strong>100% (Hoàn tất!) ✨</strong>';
                if (window.SoundFX) window.SoundFX.playPaperFlip();
                if (window.VisualFX) {
                    window.VisualFX.burstElement(container, {
                        count: 28,
                        spread: 150,
                        theme: 'celebrate',
                        pop: false
                    });
                }
            }
        } catch (e) {}
    }

    canvas.addEventListener('mousedown', (e) => {
        if (!isInitialized) fillFogLayer();
        isScratching = true;
        lastPos = getPointerPos(e);
        scratchStroke(lastPos);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isScratching) return;
        scratchStroke(getPointerPos(e));
    });

    window.addEventListener('mouseup', () => {
        isScratching = false;
        lastPos = null;
    });

    canvas.addEventListener('touchstart', (e) => {
        if (!isInitialized) fillFogLayer();
        if (e.cancelable) e.preventDefault();
        isScratching = true;
        lastPos = getPointerPos(e);
        scratchStroke(lastPos);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (!isScratching) return;
        if (e.cancelable) e.preventDefault();
        scratchStroke(getPointerPos(e));
    }, { passive: false });

    window.addEventListener('touchend', () => {
        isScratching = false;
        lastPos = null;
    });

    if (revealBtn) {
        revealBtn.addEventListener('click', () => {
            canvas.classList.add('is-cleared');
            if (badgeEl) badgeEl.innerHTML = 'Đã cào mở: <strong>100% ✨</strong>';
            if (window.SoundFX) window.SoundFX.playPaperFlip();
            if (window.VisualFX) {
                window.VisualFX.burstElement(container, {
                    count: 26,
                    spread: 145,
                    theme: 'celebrate',
                    pop: false
                });
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            fillFogLayer();
            if (window.SoundFX) window.SoundFX.playPaperFlip();
        });
    }
}

/* ==========================================================================
   TƯƠNG TÁC 7: GIẤY GẤP POP-UP 3D (MẶC ĐỊNH GẤP KÍN ĐỂ NGƯỜI XEM TỰ MỞ + PHÁO HOA 3D)
   ========================================================================== */
function initInteraction7_PopupCard() {
    const book = document.getElementById('popup-book');
    const toggleBtn = document.getElementById('btn-toggle-popup');

    if (!book) return;

    function togglePopup() {
        const isOpen = book.classList.toggle('is-open');
        if (window.SoundFX) window.SoundFX.playPaperFlip();
        if (window.VisualFX) {
            window.VisualFX.burstElement(book, {
                count: isOpen ? 28 : 14,
                spread: isOpen ? 155 : 90,
                theme: isOpen ? 'celebrate' : 'gold',
                pop: false
            });
        }
        if (toggleBtn) {
            const span = toggleBtn.querySelector('span');
            if (span) {
                span.textContent = isOpen ? 'Gập Thiệp Pop-up Lại' : 'Tự Tay Mở Thiệp Pop-up 3D';
            }
        }
    }

    // Giữ trạng thái GẤP ĐÓNG khi mới vào trang, chỉ mở khi người xem tự bấm
    book.addEventListener('click', togglePopup);
    if (toggleBtn) toggleBtn.addEventListener('click', togglePopup);
}

/* ==========================================================================
   TƯƠNG TÁC 8: Ổ KHÓA MẬT MÃ HỌC SINH 12 (CIPHER PADLOCK + NỔ KHO BÁU 3D)
   ========================================================================== */
function initInteraction8_CipherPadlock() {
    const riddles = {
        math: {
            question: `<strong>[Bài toán Xác Suất trên TV lớp 12A2]:</strong> Hai xạ thủ độc lập cùng bắn vào bia với xác suất trúng lần lượt là <code>0,7</code> và <code>0,6</code>. Xác suất để đội vô địch (có ít nhất 1 người bắn trúng) là <code>0,88</code> (tức <strong>88%</strong>).<br>👉 <em>Mã khóa gồm 4 chữ số:</em> <strong>[Sĩ số lớp 12A2]</strong> ghép với <strong>[88]</strong> là số nào?`,
            answers: ['4188', '1288', '0088'],
            hint: '💡 Đáp án: Sĩ số lớp 12A2 là 41 bạn + Kết quả xác suất 88 => Mã khóa: 4188'
        },
        phys: {
            question: `<strong>[Câu đố Vật Lý 12 - Cộng Hưởng Thanh Xuân]:</strong> Khi tần số ngoại lực bằng tần số riêng của hệ (<code>f = f₀</code>), biên độ dao động đạt <strong>cực đại (Cộng hưởng)</strong>.<br>👉 Biết <strong>41 trái tim 12A2</strong> cùng cộng hưởng ở tần số <strong>88 Hz</strong>. Hãy ghép <strong>[Sĩ số lớp]</strong> và <strong>[Tần số 88]</strong> để mở khóa!`,
            answers: ['4188', '0088'],
            hint: '💡 Đáp án: 41 thành viên cộng hưởng ở tần số 88 Hz => Mã khóa: 4188'
        }
    };

    let currentRiddle = 'math';
    const tabs = document.querySelectorAll('.riddle-tab');
    const questionEl = document.getElementById('riddle-question');
    const inputEl = document.getElementById('padlock-code-input');
    const unlockBtn = document.getElementById('btn-unlock-cipher');
    const hintBtn = document.getElementById('btn-show-hint');
    const feedbackEl = document.getElementById('padlock-feedback');
    const padlockBox = document.getElementById('padlock-box');
    const secretVault = document.getElementById('secret-vault');

    if (!inputEl || !unlockBtn) return;

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            currentRiddle = tab.getAttribute('data-riddle') || 'math';
            if (questionEl) questionEl.innerHTML = riddles[currentRiddle].question;
            if (window.SoundFX) window.SoundFX.playTvClick();
        });
    });

    function checkCode() {
        const val = inputEl.value.trim();
        const validCodes = riddles[currentRiddle].answers;

        if (validCodes.includes(val)) {
            if (padlockBox) padlockBox.classList.add('is-unlocked');
            if (secretVault) {
                secretVault.classList.remove('is-locked');
                secretVault.classList.add('is-unlocked');
            }
            if (feedbackEl) {
                feedbackEl.textContent = '🎉 Chính xác! Ổ khóa 4188 đã bật mở!';
                feedbackEl.style.color = '#1b4332';
            }
            if (window.SoundFX) window.SoundFX.playPaperFlip();
            if (window.VisualFX) {
                window.VisualFX.burstElement(secretVault || padlockBox, {
                    count: 30,
                    spread: 160,
                    theme: 'celebrate',
                    symbols: ['🔓', '🏆', '✨', '🎉', '★', '💛']
                });
            }
        } else {
            if (feedbackEl) {
                feedbackEl.textContent = '❌ Mã chưa đúng! Hãy thử mã 4188 nhé!';
                feedbackEl.style.color = '#8c2d19';
            }
            if (window.SoundFX) window.SoundFX.playTvClick();
        }
    }

    unlockBtn.addEventListener('click', checkCode);
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkCode();
    });

    if (hintBtn) {
        hintBtn.addEventListener('click', () => {
            if (feedbackEl) feedbackEl.textContent = riddles[currentRiddle].hint;
            inputEl.value = '4188';
            checkCode();
        });
    }
}

/* ==========================================================================
   TƯƠNG TÁC 5: HÒM THƯ LỜI CHƯA NÓI (CONFESSION WALL + BUNG TIM & THƯ BAY)
   ========================================================================== */
function initInteraction5_UnsaidMailbox() {
    const form = document.getElementById('confession-form');
    const fromInput = document.getElementById('confession-from');
    const toInput = document.getElementById('confession-to');
    const textInput = document.getElementById('confession-text');
    const wall = document.getElementById('confession-wall');

    if (!form || !wall) return;

    const defaultLetters = [
        {
            from: 'Một thành viên Tổ 3',
            to: 'Tập thể 12A2 Phú Điền (2026 - 2027)',
            text: 'Cảm ơn 40 bạn còn lại vì đã làm nên 3 năm cấp 3 rực rỡ nhất. Nhớ nhất hôm cả lớp dựng cổng trại Nguyễn Sinh Sắc và đêm đốt lửa trại cháy hết mình!'
        },
        {
            from: 'Ẩn danh bàn cuối',
            to: 'Thầy Cô chủ nhiệm & bộ môn',
            text: 'Lớp 12A2 tụi em đôi lúc ồn ào nhưng thương thầy cô nhiều lắm ạ. Chúc cả lớp mình kỳ thi Tốt nghiệp THPT sắp tới ai cũng đỗ Nguyện vọng 1!'
        }
    ];

    let savedLetters = [];
    try {
        const raw = localStorage.getItem('baotuong_12a2_letters');
        savedLetters = raw ? JSON.parse(raw) : defaultLetters;
    } catch (e) {
        savedLetters = defaultLetters;
    }

    function renderLetters() {
        wall.innerHTML = '';
        savedLetters.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'confession-note';
            div.innerHTML = `
                <div class="confession-meta">💌 Từ: <strong>${item.from}</strong> → Gửi đến: <strong>${item.to}</strong></div>
                <p class="confession-body">"${item.text}"</p>
            `;
            wall.appendChild(div);
        });
    }

    renderLetters();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = textInput.value.trim();
        if (!text) return;

        const newLetter = {
            from: (fromInput.value.trim() || 'Người giấu tên 12A2'),
            to: (toInput.value.trim() || 'Đại gia đình 12A2'),
            text
        };

        savedLetters.unshift(newLetter);
        try {
            localStorage.setItem('baotuong_12a2_letters', JSON.stringify(savedLetters));
        } catch (err) {}

        renderLetters();
        textInput.value = '';
        if (window.SoundFX) window.SoundFX.playPaperFlip();
        if (window.VisualFX) {
            window.VisualFX.burstElement(wall, {
                count: 24,
                spread: 135,
                theme: 'love',
                symbols: ['💌', '✈️', '💖', '✨', '🌸', '⭐']
            });
        }
    });
}

/* ==========================================================================
   TƯƠNG TÁC 9: KÉO - THẢ STICKER & GIẤY NOTE (INTERACT.JS + BUNG SAO KHI GHIM)
   ========================================================================== */
function initInteraction9_DragDropStickers() {
    const stage = document.getElementById('corkboard-stage');
    const addBtn = document.getElementById('btn-add-sticky');
    const resetBtn = document.getElementById('btn-reset-stickers');
    const noteInput = document.getElementById('new-sticky-input');

    if (!stage) return;

    let highestZ = 10;

    const initialPositions = [];
    stage.querySelectorAll('.draggable-item').forEach((el) => {
        initialPositions.push({
            el,
            x: parseFloat(el.getAttribute('data-x')) || 0,
            y: parseFloat(el.getAttribute('data-y')) || 0,
            styleTransform: el.style.transform
        });
    });

    if (window.interact) {
        window.interact('.draggable-item').draggable({
            inertia: true,
            modifiers: [
                window.interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            listeners: {
                start(event) {
                    highestZ++;
                    event.target.style.zIndex = highestZ;
                },
                move(event) {
                    const target = event.target;
                    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    target.style.transform = `translate(${x}px, ${y}px) rotate(-1deg)`;
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                },
                end(event) {
                    if (window.VisualFX) {
                        window.VisualFX.burstElement(event.target, {
                            count: 10,
                            spread: 65,
                            theme: 'gold',
                            pop: false
                        });
                    }
                }
            }
        });
    }

    if (addBtn && noteInput) {
        const colors = ['note-yellow', 'note-pink', 'note-blue'];
        addBtn.addEventListener('click', () => {
            const text = noteInput.value.trim() || '12A2 THPT Phú Điền mãi đỉnh! ❤️';
            const note = document.createElement('div');
            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            const randX = Math.floor(40 + Math.random() * 240);
            const randY = Math.floor(40 + Math.random() * 140);

            highestZ++;
            note.className = `draggable-item sticky-note ${colorClass}`;
            note.setAttribute('data-x', randX);
            note.setAttribute('data-y', randY);
            note.style.transform = `translate(${randX}px, ${randY}px) rotate(2deg)`;
            note.style.zIndex = highestZ;
            note.innerHTML = `
                <span class="note-pin"></span>
                <p>"${text}"</p>
                <small>— Bạn vừa dán —</small>
            `;
            stage.appendChild(note);
            noteInput.value = '';
            if (window.SoundFX) window.SoundFX.playPaperFlip();
            if (window.VisualFX) {
                window.VisualFX.burstElement(note, {
                    count: 18,
                    spread: 95,
                    theme: 'celebrate',
                    pop: false
                });
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            initialPositions.forEach((item) => {
                item.el.setAttribute('data-x', item.x);
                item.el.setAttribute('data-y', item.y);
                item.el.style.transform = item.styleTransform;
            });
            if (window.SoundFX) window.SoundFX.playPaperFlip();
        });
    }
}

/* ==========================================================================
   TƯƠNG TÁC 10: ĐÈN PIN RỌI CHỮ ẨN (FLASHLIGHT DARK ROOM + ĐOM ĐÓM BAY THEO ĐÈN)
   ========================================================================== */
function initInteraction10_FlashlightDarkroom() {
    const container = document.getElementById('darkroom-container');
    const toggleBtn = document.getElementById('btn-toggle-room-light');

    if (!container) return;
    let spotSparkleTick = 0;

    function updateSpot(clientX, clientY) {
        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        container.style.setProperty('--spot-x', `${x}px`);
        container.style.setProperty('--spot-y', `${y}px`);

        spotSparkleTick++;
        if (spotSparkleTick % 5 === 0 && window.VisualFX) {
            window.VisualFX.burstAt(clientX, clientY, {
                count: 3,
                spread: 38,
                theme: 'gold',
                minSize: 9,
                maxSize: 7,
                halo: false
            });
        }
    }

    container.addEventListener('mousemove', (e) => {
        updateSpot(e.clientX, e.clientY);
    });

    container.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
            updateSpot(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    container.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            updateSpot(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const lightsOn = container.classList.toggle('lights-on');
            const span = toggleBtn.querySelector('span');
            if (span) {
                span.textContent = lightsOn ? 'Tắt đèn phòng (Dùng đèn pin)' : 'Bật công tắc đèn cả phòng';
            }
            if (window.SoundFX) window.SoundFX.playTvClick();
            if (window.VisualFX) {
                window.VisualFX.burstElement(container, {
                    count: 22,
                    spread: 140,
                    theme: lightsOn ? 'celebrate' : 'neon',
                    pop: false
                });
            }
        });
    }
}

/* ==========================================================================
   TƯƠNG TÁC 11: CUỘN PHIM NGANG 35MM (12 ẢNH KỶ NIỆM - TUA CHÍNH XÁC TỪNG ẢNH 1)
   ========================================================================== */
function initInteraction11_HorizontalFilmReel() {
    const track = document.getElementById('film-strip-track');
    const viewport = document.getElementById('film-strip-viewport');
    const leftBtn = document.getElementById('btn-film-left');
    const rightBtn = document.getElementById('btn-film-right');
    const counterBadge = document.getElementById('film-counter-badge');
    const lightbox = document.getElementById('film-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('btn-close-lightbox');

    if (!track || !viewport) return;

    const filmPhotos = [
        { code: '01A', src: 'assets/images/12a2/img_01.jpg', caption: 'Tập thể 12A2 áo xanh trong lều trại Nguyễn Sinh Sắc' },
        { code: '02A', src: 'assets/images/12a2/img_02.jpg', caption: 'Thầy trò 12A2 rạng rỡ dưới nắng sân trường Khu B' },
        { code: '03A', src: 'assets/images/12a2/img_03.jpg', caption: 'Lễ Khai Giảng năm học 2026 - 2027 trường THCS & THPT Phú Điền' },
        { code: '04A', src: 'assets/images/12a2/img_04.jpg', caption: 'Kỷ niệm bên thầy giáo kính yêu ngay trước bảng lớp' },
        { code: '05A', src: 'assets/images/12a2/img_05.jpg', caption: 'Giây phút tự hào nhận Cờ Thi Đua Hạng Nhất Tuần!' },
        { code: '06A', src: 'assets/images/12a2/img_06.jpg', caption: 'Bữa tiệc bánh kem mừng tuổi mới ngay tại phòng học 12A2' },
        { code: '07A', src: 'assets/images/12a2/img_07.jpg', caption: 'Tiết học Toán Xác Suất vui nhộn và đầy ắp tiếng cười' },
        { code: '08A', src: 'assets/images/12a2/img_08.jpg', caption: 'Nụ cười ấm áp bên cô giáo và chiếc bánh kem xanh' },
        { code: '09A', src: 'assets/images/12a2/img_09.jpg', caption: 'Vòng tròn đoàn kết 12A2 vỗ tay hát vang trong trại' },
        { code: '10A', src: 'assets/images/12a2/img_10.jpg', caption: 'Đêm lửa trại bùng cháy nhiệt huyết tuổi 18' },
        { code: '11A', src: 'assets/images/12a2/img_11.jpg', caption: 'Cổng trại tre Nguyễn Sinh Sắc rực rỡ cờ đỏ sao vàng' },
        { code: '12A', src: 'assets/images/12a2/img_12.jpg', caption: 'Chú nai vàng thủ công – tác phẩm tâm huyết của 12A2' }
    ];

    let currentFrameIndex = 0;
    const frameCards = [];

    function updateActiveFrameUI(index) {
        currentFrameIndex = Math.max(0, Math.min(filmPhotos.length - 1, index));
        frameCards.forEach((c, i) => {
            c.classList.toggle('is-focused-frame', i === currentFrameIndex);
        });
        if (counterBadge) {
            const numStr = String(currentFrameIndex + 1).padStart(2, '0');
            counterBadge.innerHTML = `<i class="fa-solid fa-camera"></i> KHUNG ${numStr} / ${filmPhotos.length} • KODAK 200`;
        }
        if (leftBtn) leftBtn.disabled = currentFrameIndex === 0;
        if (rightBtn) rightBtn.disabled = currentFrameIndex === filmPhotos.length - 1;
    }

    function scrollToFrame(index) {
        const targetIdx = Math.max(0, Math.min(filmPhotos.length - 1, index));
        updateActiveFrameUI(targetIdx);
        const card = frameCards[targetIdx];
        if (!card) return;
        const targetLeft = card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2;
        viewport.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: 'smooth'
        });
        if (window.VisualFX) {
            window.VisualFX.burstElement(card, {
                count: 12,
                spread: 80,
                theme: 'gold',
                pop: false
            });
        }
    }

    filmPhotos.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'film-frame-card';
        card.innerHTML = `
            <div class="film-frame-num">
                <span>KODAK 400</span>
                <span>▶ ${item.code}</span>
            </div>
            <div class="film-frame-img-box">
                <img src="${item.src}" alt="${item.caption}" loading="lazy">
            </div>
            <p class="film-frame-caption">#${idx + 1}. ${item.caption}</p>
        `;

        card.addEventListener('click', () => {
            if (window.SoundFX) window.SoundFX.playShutterClick();
            scrollToFrame(idx);

            card.classList.remove('flash-active');
            void card.offsetWidth;
            card.classList.add('flash-active');

            setTimeout(() => {
                if (lightbox && lightboxImg && lightboxCaption) {
                    lightboxImg.src = item.src;
                    lightboxCaption.textContent = `#${idx + 1} (${item.code}) — ${item.caption}`;
                    lightbox.classList.remove('hidden');
                }
            }, 140);
        });

        frameCards.push(card);
        track.appendChild(card);
    });

    updateActiveFrameUI(0);

    // Đồng bộ chỉ số khung hình khi người dùng tự vuốt tay trên dải phim
    let scrollTimer = null;
    viewport.addEventListener('scroll', () => {
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const centerPos = viewport.scrollLeft + viewport.clientWidth / 2;
            let closestIdx = 0;
            let minDiff = Infinity;
            frameCards.forEach((card, idx) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const diff = Math.abs(cardCenter - centerPos);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIdx = idx;
                }
            });
            updateActiveFrameUI(closestIdx);
        }, 80);
    }, { passive: true });

    if (leftBtn) {
        leftBtn.addEventListener('click', () => {
            if (window.SoundFX) window.SoundFX.playShutterClick();
            scrollToFrame(currentFrameIndex - 1);
        });
    }

    if (rightBtn) {
        rightBtn.addEventListener('click', () => {
            if (window.SoundFX) window.SoundFX.playShutterClick();
            scrollToFrame(currentFrameIndex + 1);
        });
    }

    if (closeBtn && lightbox) {
        closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.add('hidden');
        });
    }
}

