# 📋 BẢN GHI BÀN GIAO DỰ ÁN CỰC KỲ CHI TIẾT (DÀNH CHO AI TIẾP NHẬN)

> **Mục đích file này:** Nếu người dùng hết token hoặc chuyển sang một phiên chat AI mới, AI tiếp nhận chỉ cần đọc toàn bộ tài liệu này là có thể nắm bắt **100% kiến trúc, dữ liệu lớp 12A2, toàn bộ 11 tính năng tương tác, các lỗi đã khắc phục, quy ước thiết kế của chủ dự án và cách đồng bộ GitHub** để làm việc tiếp ngay lập tức mà không cần hỏi lại từ đầu.

---

## 1. THÔNG TIN ĐỊNH DANH & ĐỒNG BỘ DỰ ÁN

- **Tên dự án:** **Trạm Ký Ức 12A2** — Sổ Lưu Bút Kỹ Thuật Số (Digital Scrapbook) gắn mã QR trên báo tường giấy.
- **Đơn vị:** Tập thể lớp **12A2** — **Trường THCS & THPT Phú Điền** (Đồng Tháp).
- **Niên khóa:** **`2026 - 2027`** *(Lưu ý: Luôn giữ đúng niên khóa `2026 - 2027` ở mọi nơi, không dùng niên khóa khác)*.
- **Sĩ số lớp:** **41 học sinh** (41/41).
- **GitHub Repository:** `https://github.com/thkcnpt-pixel/baotuong12a2` (nhánh chính: `main`).
- **Website Live (GitHub Pages):** `https://thkcnpt-pixel.github.io/baotuong12a2/`
- **Quy tắc đồng bộ QUAN TRỌNG:**
  - **CHỈ đồng bộ (commit & push) lên GitHub (`origin/main`)**.
  - **KHÔNG cần đồng bộ lên Google Drive** (chủ dự án đã xác nhận chỉ dùng GitHub để lưu trữ và cập nhật web trực tiếp qua GitHub Pages).

---

## 2. CẤU TRÚC THƯ MỤC & TÀI NGUYÊN CHI TIẾT

```text
baotuong12a2/
├── index.html                  # Toàn bộ cấu trúc HTML5 (Intro Phong Bì + Sổ Lật Trang 3D gồm 10 trang)
├── README.md                   # Giới thiệu tổng quan repo & link trỏ tới bản ghi bàn giao này
├── BAN_GHI_BAN_GIAO_AI.md      # Tài liệu bàn giao chi tiết (file này)
├── css/
│   ├── style.css               # Theme giấy Kraft cổ điển, typography viết tay, layout gọn lề, sticky controls
│   └── interactions.css        # CSS 3D Page-Flip, Envelope, Polaroid, Retro TV, Chalkboard, Pop-up 3D, Padlock, Corkboard, Darkroom, Film Reel
├── js/
│   ├── main.js                 # Hệ thống nhạc nền Lofi (window.BgmController) & hiệu ứng âm thanh Web Audio API (window.SoundFX)
│   └── interactions.js         # Logic lật trang 3D + toàn bộ 11 tính năng tương tác vật lý + chống vọng tiếng video
└── assets/
    ├── audio/
    │   └── lofi-thanh-xuan.wav # Nhạc nền Lofi Thanh Xuân (16 giây loop mượt: Rhodes Fmaj7->Em7->Dm7->Cmaj7 + hộp nhạc)
    ├── images/12a2/
    │   ├── img_01.jpg          # Tập thể 12A2 mặc áo xanh đồng phục ngồi trong lều trại Nguyễn Sinh Sắc
    │   ├── img_02.jpg          # Thầy trò 12A2 chụp ảnh dưới nắng sân trường Khu B
    │   ├── img_03.jpg          # Lễ Khai Giảng cuối cấp (áo dài trắng, sơ mi trắng) tại sân trường Phú Điền
    │   ├── img_04.jpg          # Tập thể 12A2 chụp cùng thầy giáo ngay trước bảng lớp
    │   ├── img_05.jpg          # Lớp nhận Cờ Thi Đua Hạng Nhất Tuần ("Đạt thành tích xuất sắc tuần - Hạng I") + bánh kem
    │   ├── img_06.jpg          # Bữa tiệc bánh kem sinh nhật tập thể tại phòng học 12A2
    │   ├── img_07.jpg          # Tiết học Toán Xác Suất (trên TV lớp có bài toán P = 1 - 0.3*0.4 = 0.88)
    │   ├── img_08.jpg          # Khoảnh khắc ấm áp bên cô giáo và chiếc bánh kem xanh
    │   ├── img_09.jpg          # Vòng tròn đoàn kết 12A2 mặc áo đồng phục Phú Điền vỗ tay trong trại
    │   ├── img_10.jpg          # Đêm lửa trại bùng cháy của lớp 12A2
    │   ├── img_11.jpg          # Cổng trại tre "Nguyễn Sinh Sắc" rực rỡ cờ đỏ sao vàng
    │   └── img_12.jpg          # Linh vật chú nai vàng thủ công do tập thể 12A2 tự làm
    └── video/
        ├── video_01.mp4 .. video_11.mp4  # 11 video kỷ niệm lớp 12A2 (đã được remux bằng ffmpeg với +faststart)
```

---

## 3. DANH SÁCH ĐẦY ĐỦ 41 HỌC SINH LỚP 12A2 (2026 - 2027)

Danh sách này đang được hiển thị đầy đủ bằng mực dạ quang ở **Trang 9 (Đèn Pin Rọi Chữ Ẩn - `#flashlight-section`)**:

1. Bùi Quốc Anh
2. Nguyễn Tuấn Anh
3. Trần Thị Huỳnh Anh
4. Dương Phan Bảo Duy
5. Trần Phạm Thuỳ Dương
6. Ngô Ân Đình
7. Trần Thị Ngọc Giàu
8. Trần Phước Hậu
9. Nguyễn Trần Quốc Huy
10. Phạm Nhật Huy
11. Võ Thị Mộng Huyền
12. Nguyễn Thị Mộng Huỳnh
13. Nguyễn Dương Khánh
14. Trần Đăng Khoa
15. Võ Nguyễn Anh Khôi
16. Lê Thị Tường Lam
17. Võ Nguyễn Tường Lam
18. Nguyễn Thị Kim Ngọc
19. Nguyễn Chí Nguyên
20. Phạm Đặng Thảo Nguyên
21. Nguyễn Lê Trọng Nhân
22. Ngô Huỳnh Yến Nhi
23. Nguyễn Thị Yến Nhi
24. Hồ Thị Mỹ Nhơn
25. Đặng Quỳnh Như
26. Nguyễn Văn Nhường
27. Nguyễn Minh Nhựt
28. Huỳnh Tấn Tài
29. Phạm Nhựt Tấn
30. Nguyễn Ngọc Thảo
31. Nguyễn Phúc Thiện
32. Nguyễn Phước Thịnh
33. Nguyễn Thị Mỹ Tiên
34. Lê Gia Tiến
35. Thi Nguyễn Hữu Toàn
36. Đinh Thị Ngọc Trâm
37. Lê Thị Ngọc Trâm
38. Trương Vĩnh Trọng
39. Nguyễn Chí Vinh
40. Dương Tuấn Vũ
41. Nguyễn Thị Như Ý

---

## 4. KIẾN TRÚC HỆ THỐNG LẬT TRANG 3D & 11 TÍNH NĂNG TƯƠNG TÁC

Website **không dùng kiểu cuộn dọc dài ngoằng**, mà thiết kế thành **Sổ Lưu Bút Lật Trang 3D** gồm **1 Màn hình Intro Phong Bì** + **10 Trang Sổ (`.book-page`)** với thanh mục lục `.bookmark-tab` ở trên và cặp nút `Trang trước / Trang tiếp theo` ở cả trên và dưới.

### A. Hệ thống Lật Trang 3D (`initBookPageFlipSystem` trong `js/interactions.js`)
- Container: `#book-stage-3d` (có gáy sách lò xo `.book-spiral-spine`).
- Các trang dùng class `.book-page` và thuộc tính `data-page-index="0..9"`, `data-page-title="..."`.
- Khi gọi `goToPage(targetIndex)`:
  1. Gọi `stopAllVideosOnPageLeave()` để **dừng triệt để mọi video MP4/YouTube** và bật lại nhạc nền Lofi nếu trước đó bị tạm dừng vì xem video.
  2. Phát âm thanh lật trang `window.SoundFX.playPaperFlip()`.
  3. Gắn class `.is-active` cùng animation `.flip-next-in` hoặc `.flip-prev-in`.
  4. Cập nhật `.bookmark-tab.active`, `#book-page-indicator`, và trạng thái `disabled` của nút Trước/Sau.
  5. Dùng `requestAnimationFrame` gọi `window.refreshChalkboardCanvas()` (khi vào Trang 3 - index 2) hoặc `window.refreshScratchCanvas()` (khi vào Trang 4 - index 3) vì canvas bị `display: none` trước đó sẽ có kích thước `0x0`.

### B. Chi tiết từng tính năng (Intro + 10 Trang)

1. **Intro Overlay — Phong Bì Ma Thuật (`#envelope-intro-container`)**
   - Hàm: `initInteraction1_MagicEnvelope()`
   - **Trạng thái mặc định:** Gấp kín (`#magic-envelope` KHÔNG có class `.is-open`) để người xem tự chạm vào con dấu sáp `12A2` mở phong bì.
   - Khi mở: Thêm `.is-open`, phát tiếng lật giấy và kích hoạt `window.BgmController.tryPlay()` bật nhạc Lofi Thanh Xuân. Nút `#btn-enter-scrapbook` đóng overlay (`.is-dismissed`).

2. **Trang 1 (`data-page-index="0"`) — Góc Ảnh Polaroid Lật 3D (`#polaroid-section`)**
   - Hàm: `initInteraction2_PolaroidFlip()`
   - Gồm 4 thẻ `.polaroid-card` sử dụng ảnh `img_03.jpg`, `img_01.jpg`, `img_02.jpg`, `img_05.jpg`.
   - Chạm/nhấn Enter để toggle `.is-flipped` (xoay 3D 180 độ xem lưu bút viết tay mặt sau).

3. **Trang 2 (`data-page-index="1"`) — Thước Phim Tua Ngược / Retro TV (`#retro-tv-section`)**
   - Hàm: `initInteraction3_RetroTV()`
   - Gồm 12 kênh: `CH-01` đến `CH-11` phát `assets/video/video_01.mp4` .. `video_11.mp4`, và kênh thứ 12 (`CH-YT`) là iframe YouTube (`#tv-youtube-iframe`).
   - Cơ chế chuyển kênh `switchChannel(index, autoPlayNow = true)`:
     - Phát tiếng tap gỗ `playTvClick()`, bật nhiễu CRT `#tv-static-noise` trong 220ms.
     - Cập nhật cả `<source src>` lẫn `videoEl.src`, đặt `videoEl.currentTime = 0`, gọi `videoEl.load()`.
     - Đợi `loadeddata` (hoặc `readyState >= 2`) rồi gọi `videoEl.play()` để **chuyển kênh là tự phát ngay lập tức có cả hình lẫn tiếng**.
     - Tự động gọi `window.BgmController.pauseForVideo()` khi video `play`, và `resumeAfterVideo()` khi `pause`, `ended`, hoặc chuyển trang (`stopAllVideosOnPageLeave()`).

4. **Trang 3 (`data-page-index="2"`) — Góc Bảng Đen 12A2 (`#chalkboard-section`)**
   - Hàm: `initInteraction4_Chalkboard()`
   - Lớp nội dung phấn viết sẵn (`.chalk-content-layer`):
     - Bên trái: Sĩ số `41 / 41`, trực nhật, Hạng Nhất Thi Đua Tuần, 100% Đỗ Tốt Nghiệp & NV1.
     - Bên phải:
       - **Bài toán nỗ lực 1% mỗi ngày:** $1.01^{365} \approx 37.78 \mid 0.99^{365} \approx 0.03$.
       - **Định luật Vật Lý 12 & Quỹ Đạo Thanh Xuân:** $S = v \cdot t \mid f_{\text{cộng hưởng}} = f_{12A2} \mid \Delta U = Q + A$.
   - Lớp Canvas vẽ phấn (`#chalkboard-canvas`): Hỗ trợ chuột & cảm ứng với 4 màu phấn (`.chalk-piece`: trắng `#f2f0e6`, vàng `#f7d969`, hồng `#f4978e`, xanh `#8ecae6`) và nút khăn lau `#btn-clear-chalk`.
   - *Lưu ý:* Không đặt danh sách 41 tên lên bảng đen để bảng luôn thoáng, gọn, không bị che khuất chữ.

5. **Trang 4 (`data-page-index="3"`) — Thẻ Cào Ký Ức (`#scratch-card-section`)**
   - Hàm: `initInteraction6_ScratchCard()`
   - Ảnh nền bí mật: `assets/images/12a2/img_08.jpg`.
   - Canvas `#scratch-canvas` phủ lớp sương mù bạc, cào bằng `globalCompositeOperation = 'destination-out'`.
   - Khi cào vượt **60%**, tự động mở toàn bộ lớp sương mù. Có nút `#btn-scratch-reveal` và `#btn-scratch-reset`.

6. **Trang 5 (`data-page-index="4"`) — Giấy Gấp Pop-up 3D (`#popup-card-section`)**
   - Hàm: `initInteraction7_PopupCard()`
   - **Trạng thái mặc định:** Thiệp **gấp kín** (`#popup-book` KHÔNG có class `.is-open`), hiển thị bìa `#popup-closed-cover`.
   - Khi người dùng chạm vào thiệp hoặc bấm `#btn-toggle-popup`: Mở bung mô hình 3D gồm 4 lớp ảnh: Cổng trại Nguyễn Sinh Sắc (`img_11.jpg`), Tập thể 12A2 (`img_01.jpg`), Linh vật nai vàng (`img_12.jpg`), Đêm lửa trại (`img_10.jpg`).

7. **Trang 6 (`data-page-index="5"`) — Ổ Khóa Mật Mã 12A2 (`#padlock-section`)**
   - Hàm: `initInteraction8_CipherPadlock()`
   - Có 2 tab câu đố (`.riddle-tab`):
     - **Toán 12:** Bài toán Xác Suất trên TV lớp (`img_07.jpg`, đáp án 88%) ghép với sĩ số 41 $\rightarrow$ **`4188`**.
     - **Vật Lý 12:** Tần số cộng hưởng 88 Hz ghép sĩ số 41 $\rightarrow$ **`4188`**.
   - Nhập đúng `4188` (hoặc bấm nút gợi ý tự điền `#btn-show-hint`) sẽ mở khóa `#secret-vault`, hiển thị 4 ảnh hậu trường (`img_07.jpg`, `img_09.jpg`, `img_04.jpg`, `img_06.jpg`).

8. **Trang 7 (`data-page-index="6"`) — Hòm Thư "Lời Chưa Nói" (`#unsaid-mailbox-section`)**
   - Hàm: `initInteraction5_UnsaidMailbox()`
   - Form `#confession-form` (`#confession-from`, `#confession-to`, `#confession-text`) lưu danh sách thư vào `localStorage` với key **`baotuong_12a2_letters`** và render ra `#confession-wall`.
   - *Lưu ý:* **Đã xóa bỏ phần nhúng GitHub Giscus** theo yêu cầu của chủ dự án (tránh lỗi chưa cài Giscus app trên repo). Không thêm lại Giscus trừ khi người dùng yêu cầu.

9. **Trang 8 (`data-page-index="7"`) — Góc Kéo - Thả Sticker & Giấy Note (`#drag-drop-section`)**
   - Hàm: `initInteraction9_DragDropStickers()` (dùng thư viện **Interact.js** CDN).
   - Bảng gỗ `#corkboard-stage` chứa các `.sticky-note` kích thước gọn (`148px` width trên desktop, tối ưu cho mobile để không đè nhau), các `.vintage-sticker`, và ảnh mini `.mini-polaroid-drag` (`img_12.jpg`).
   - Hỗ trợ tạo thêm Note mới (`#new-sticky-input` + `#btn-add-sticky`) và nút đặt lại vị trí (`#btn-reset-stickers`).

10. **Trang 9 (`data-page-index="8"`) — Đèn Pin Rọi Chữ Dạ Quang Ẩn (`#flashlight-section`)**
    - Hàm: `initInteraction10_FlashlightDarkroom()`
    - Cập nhật biến CSS `--spot-x`, `--spot-y` trên `#darkroom-container` theo vị trí chuột/ngón tay để xuyên qua lớp mặt nạ tối `#darkroom-shadow-mask`.
    - Hiển thị toàn bộ **41 tên học sinh 12A2** phát sáng dạ quang và có nút `#btn-toggle-room-light` bật/tắt đèn cả phòng.

11. **Trang 10 (`data-page-index="9"`) — Cuộn Phim Ngang 35mm (`#film-reel-section`)**
    - Hàm: `initInteraction11_HorizontalFilmReel()`
    - Render trọn bộ **12 ảnh** (`img_01.jpg` đến `img_12.jpg`) thành dải phim Kodak 35mm ngang (`#film-strip-track`).
    - Bấm vào khung phim phát tiếng máy ảnh cơ (`playShutterClick()`), chớp flash trắng (`.flash-active`) và mở Lightbox phóng to (`#film-lightbox`).

---

## 5. HỆ THỐNG ÂM THANH & NHẠC NỀN (`js/main.js`)

- **`window.BgmController`**:
  - Quản lý thẻ `<audio id="bgm-audio" src="assets/audio/lofi-thanh-xuan.wav" loop>`.
  - Tự động bật nhạc ở lần chạm đầu tiên (`pointerdown` / `keydown`) nếu trình duyệt chặn autoplay lúc mới vào trang.
  - `pauseForVideo()`: Tạm dừng nhạc nền khi video Retro TV phát.
  - `resumeAfterVideo()`: Tự động bật lại nhạc nền khi video dừng, kết thúc, hoặc người dùng lật sang trang khác.
- **`window.SoundFX`** (Web Audio API — không cần file ngoài, không bị rè):
  - `playPaperFlip()`: Hợp âm Kalimba/Chime gỗ 2 nốt (`C5 -> E5`) êm dịu cho lật trang, lật ảnh Polaroid, mở thiệp.
  - `playTvClick()`: Tiếng chạm gỗ trầm (`340Hz -> 120Hz`) cho nút bấm chuyển kênh, công tắc đèn.
  - `playShutterClick()`: Tiếng màn trập máy ảnh cơ 2 nhịp cho cuộn phim 35mm.

---

## 6. CÁC LỖI ĐÃ KHẮC PHỤC & QUY TẮC THIẾT KẾ BẮT BUỘC GIỮ

1. **Lỗi Video MP4 phát ngầm 10s không hình khi chuyển kênh:**
   - *Nguyên nhân gốc:* File MP4 tải từ mạng xã hội trước đây có audio PTS âm (`-0.047891s`) và dồn toàn bộ gói audio lên đầu file, đẩy keyframe video đầu tiên xuống tận cuối/giữa file (`217KB–1.6MB`), khiến trình duyệt phát tiếng trước 10s mà chưa thấy hình.
   - *Cách đã xử lý:* Toàn bộ `video_01.mp4`..`video_11.mp4` đã được remux lại bằng lệnh:
     ```bash
     ffmpeg -y -i input.mp4 -c copy -avoid_negative_ts make_zero -movflags +faststart output.mp4
     ```
   - *Quy tắc cho AI sau:* Nếu người dùng gửi thêm video `.mp4` mới, **bắt buộc chạy lệnh `ffmpeg` trên** trước khi đưa vào `assets/video/`.
2. **Không dùng `position: fixed` cho thanh công cụ nổi:**
   - `.floating-controls` sử dụng `position: sticky; top: 0;` để không bao giờ che khuất nội dung đầu trang trên điện thoại.
3. **Tối ưu không gian hiển thị trên màn hình nhỏ (Mobile-first):**
   - Chủ dự án yêu cầu **không lãng phí lề**, giảm padding/khoảng trống thừa, đảm bảo các trang dài (như Bảng Đen, Bàn Sticker) hiển thị trọn vẹn từ đầu đến cuối không bị cắt/che khuất.
   - Đã loại bỏ các huy hiệu `TƯƠNG TÁC 0X` màu đỏ gây rối mắt.
4. **Trạng thái gập kín ban đầu:**
   - Phong bì Intro và Thiệp Pop-up 3D (Trang 5) phải luôn ở trạng thái **gấp kín** khi tải trang để người xem tự tương tác mở.

---

## 7. PROMPT MẪU ĐỂ DÁN CHO AI MỚI (KHI HẾT TOKEN)

Nếu bạn cần chuyển sang một cuộc hội thoại AI mới, hãy copy đoạn sau gửi cho AI:

> *"Hãy đọc kỹ file `BAN_GHI_BAN_GIAO_AI.md` trong repo `thkcnpt-pixel/baotuong12a2` (đường dẫn local `/home/antigravity/thkcnpt-pixel/baotuong12a2/BAN_GHI_BAN_GIAO_AI.md`). Đó là toàn bộ kiến trúc, dữ liệu 41 học sinh 12A2 (niên khóa 2026 - 2027), 11 tính năng tương tác và các quy tắc thiết kế của dự án Trạm Ký Ức 12A2. Lưu ý: sau khi chỉnh sửa bất cứ gì, CHỈ cần commit và push lên GitHub (`origin/main`), không cần đồng bộ Google Drive. Sau khi đọc xong, hãy xác nhận đã nắm thông tin và chờ yêu cầu mới của tôi."*
