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

## 4. KIẾN TRÚC HỆ THỐNG LẬT TRANG 3D (12 TRANG) & 11 TÍNH NĂNG TƯƠNG TÁC

Website được thiết kế thành **Sổ Lưu Bút Lật Trang 3D** gồm **1 Màn hình Intro Phong Bì** + **12 Trang Sổ (`.book-page`, từ `Trang 01 / 12` đến `Trang 12 / 12`)**:
- **Trang 01 / 12 (`data-page-index="0"`):** Trang Mở Đầu (Bìa Lưu Bút & Lời Tựa 12A2 — `#opening-page-section`).
- **Trang 02 → 11 / 12 (`data-page-index="1..10"`):** 10 Trang tương tác vật lý.
- **Trang 12 / 12 (`data-page-index="11"`):** Trang Kết Thúc (Lời Chào Tạm Biệt & Hẹn Ngày Hội Ngộ — `#closing-page-section`).

### A. Hệ thống Chuyển Cảnh Thuyết Trình 3D & Hiệu Ứng Lấp Lánh (`initBookPageFlipSystem` + `initSparkleAndActionFX`)
- Container: `#book-stage-3d` (`perspective: 1050px`, có gáy sách lò xo `.book-spiral-spine`, nhãn toast `.fx-transition-toast` và luồng sáng quét `.stage-light-sweep`).
- **8 hiệu ứng chuyển cảnh thuyết trình 3D** (chạy đồng thời trang cũ `.is-exiting` bay ra và trang mới `.is-active` bay vào trong 0.82s):
  1. `fx-cube`: Khối Lập Phương 3D (Cube Spin)
  2. `fx-carousel`: Băng Chuyền 3D (Coverflow)
  3. `fx-portal`: Cổng Không Gian 3D (Portal Zoom)
  4. `fx-origami`: Gấp Giấy Origami 3D (Unfold)
  5. `fx-vortex`: Xoáy Lốc Ngân Hà 3D (Vortex)
  6. `fx-door`: Cánh Cửa Thời Gian 3D (Grand Door)
  7. `fx-cards`: Tráo Bài Ma Thuật 3D (Deck Toss)
  8. `fx-prism`: Lăng Kính Ánh Sáng 3D (Prism Flip)
- **Hệ thống lấp lánh & tương tác (`window.VisualFX`):**
  - Tự động gắn `.page-sparkle-field` (10 ngôi sao nhấp nháy + 8 đom đóm vàng) và viền ánh kim cho tất cả 12 trang.
  - Hiệu ứng xuất hiện 3D so le (`.fx-stagger-item`) cho các thành phần bên trong mỗi trang.
  - Pháo hoa/hạt 3D (`burstAt`, `burstElement`) cho mọi cú chạm nút và từng tương tác riêng (lật Polaroid bung tim, đổi kênh TV tia neon, vẽ phấn/cào thẻ/rọi đèn pin có vệt sao bay theo ngón tay, mở khóa `4188` nổ kho báu, gửi thư hòm thư bay tim).
- Khi gọi `goToPage(targetIndex)`:
  1. Gọi `stopAllVideosOnPageLeave()` để **dừng triệt để mọi video MP4/YouTube** và bật lại nhạc nền Lofi nếu trước đó bị tạm dừng vì xem video.
  2. Phát âm thanh lật trang `window.SoundFX.playPaperFlip()`, quét luồng sáng & bắn hạt sao hai bên sân khấu.
  3. Ép trình duyệt flush layout (`void offsetWidth`) rồi chạy đồng thời class 3D thoát ra & bay vào (`.fx-<key>-<dir>-out` / `-in`).
  4. Cập nhật `.bookmark-tab.active` (tự động trượt ngang căn giữa tab bằng `scrollIntoView`) và trạng thái `disabled` của nút Trước/Sau.
  5. Dùng `requestAnimationFrame` kiểm tra `activePageId` (`chalkboard-section` hoặc `scratch-card-section`) để gọi `window.refreshChalkboardCanvas()` hoặc `window.refreshScratchCanvas()` lấy đúng kích thước thật sau khi trang đã `display: block`.

### B. Chi tiết từng trang (Intro + 12 Trang Sổ)

1. **Intro Overlay — Phong Bì Ma Thuật (`#envelope-intro-container`)**
   - Hàm: `initInteraction1_MagicEnvelope()`
   - **Trạng thái mặc định:** Gấp kín (`#magic-envelope` KHÔNG có class `.is-open`) để người xem tự chạm vào con dấu sáp `12A2` mở phong bì.
   - Khi mở: Thêm `.is-open`, phát tiếng lật giấy và kích hoạt `window.BgmController.tryPlay()` bật nhạc Lofi Thanh Xuân. Nút `#btn-enter-scrapbook` đóng overlay (`.is-dismissed`).

2. **Trang 01 / 12 (`data-page-index="0"`) — Trang Mở Đầu (`#opening-page-section`)**
   - Bìa trong trang trọng với huy hiệu trường THCS & THPT Phú Điền, tiêu đề lớn `TRẠM KÝ ỨC 12A2`, ảnh tập thể `img_03.jpg`, câu thơ thanh xuân, 3 huy hiệu thống kê (`Sĩ số: 41/41`, `Trại: Nguyễn Sinh Sắc`, `Hạng Nhất Tuần`) và nút bắt đầu lật sổ (`data-target-page="1"`).

3. **Trang 02 / 12 (`data-page-index="1"`) — 1. Góc Ảnh Polaroid Lật 3D (`#polaroid-section`)**
   - Hàm: `initInteraction2_PolaroidFlip()`
   - Gồm 4 thẻ `.polaroid-card` sử dụng ảnh `img_03.jpg`, `img_01.jpg`, `img_02.jpg`, `img_05.jpg`.
   - Chạm/nhấn Enter để toggle `.is-flipped` (xoay 3D 180 độ xem lưu bút viết tay mặt sau).

4. **Trang 03 / 12 (`data-page-index="2"`) — 2. Thước Phim Tua Ngược / Retro TV (`#retro-tv-section`)**
   - Hàm: `initInteraction3_RetroTV()`
   - Gồm 12 kênh: `CH-01` đến `CH-11` phát `assets/video/video_01.mp4` .. `video_11.mp4`, và kênh thứ 12 (`CH-YT`) là iframe YouTube (`#tv-youtube-iframe`).
   - Chuyển kênh `switchChannel(index, autoPlayNow = true)` tự động phát ngay có cả hình và tiếng, tự tắt nhạc nền Lofi khi phát và bật lại khi dừng/rời trang.

5. **Trang 04 / 12 (`data-page-index="3"`) — 3. Góc Bảng Đen 12A2 (`#chalkboard-section`)**
   - Hàm: `initInteraction4_Chalkboard()`
   - Góc trái: Sĩ số `41 / 41`, trực nhật, Hạng Nhất Thi Đua Tuần, 100% Đỗ Tốt Nghiệp & NV1.
   - Góc phải: Bài toán nỗ lực 1% mỗi ngày ($1.01^{365} \approx 37.78$) & Định luật Vật Lý 12 ($S = v \cdot t$, cộng hưởng 41 tần số, $\Delta U = Q + A$).
   - Canvas `#chalkboard-canvas`: Vẽ phấn 4 màu + khăn lau bảng `#btn-clear-chalk`.

6. **Trang 05 / 12 (`data-page-index="4"`) — 4. Thẻ Cào Ký Ức (`#scratch-card-section`)**
   - Hàm: `initInteraction6_ScratchCard()`
   - Ảnh nền bí mật: `assets/images/12a2/img_08.jpg`.
   - **Đã khắc phục lỗi khó cào:** Không khởi tạo canvas khi trang đang ẩn (`rect.width === 0`), tự động lấy đúng kích thước thật khi lật tới trang, dùng nét cọ liền mạch (`lineTo` + `arc` với bán kính lớn `12%` chiều rộng thẻ) và **chỉ cần cào 26% diện tích thực tế (hiển thị 100%) là tự động mở bung hoàn toàn bức ảnh**.

7. **Trang 06 / 12 (`data-page-index="5"`) — 5. Giấy Gấp Pop-up 3D (`#popup-card-section`)**
   - Hàm: `initInteraction7_PopupCard()`
   - **Trạng thái mặc định:** Thiệp **gấp kín** (`#popup-book` KHÔNG có class `.is-open`), hiển thị bìa `#popup-closed-cover`. Chạm vào để mở bung mô hình 3D (`img_11.jpg`, `img_01.jpg`, `img_12.jpg`, `img_10.jpg`).

8. **Trang 07 / 12 (`data-page-index="6"`) — 6. Ổ Khóa Mật Mã 12A2 (`#padlock-section`)**
   - Hàm: `initInteraction8_CipherPadlock()`
   - Câu đố Toán Xác Suất (88%) và Vật Lý 12 (88 Hz) ghép sĩ số 41 $\rightarrow$ mã **`4188`**, mở khóa `#secret-vault` (`img_07.jpg`, `img_09.jpg`, `img_04.jpg`, `img_06.jpg`).

9. **Trang 08 / 12 (`data-page-index="7"`) — 7. Hòm Thư "Lời Chưa Nói" (`#unsaid-mailbox-section`)**
   - Hàm: `initInteraction5_UnsaidMailbox()`
   - Lưu thư vào `localStorage` (`baotuong_12a2_letters`). Không dùng Giscus.

10. **Trang 09 / 12 (`data-page-index="8"`) — 8. Góc Kéo - Thả Sticker & Giấy Note (`#drag-drop-section`)**
    - Hàm: `initInteraction9_DragDropStickers()` (Interact.js).

11. **Trang 10 / 12 (`data-page-index="9"`) — 9. Đèn Pin Rọi Chữ Dạ Quang Ẩn (`#flashlight-section`)**
    - Hàm: `initInteraction10_FlashlightDarkroom()` — Rọi sáng 41 tên thành viên 12A2.

12. **Trang 11 / 12 (`data-page-index="10"`) — 10. Cuộn Phim Ngang 35mm (`#film-reel-section`)**
    - Hàm: `initInteraction11_HorizontalFilmReel()`
    - **Đã khắc phục lỗi nhảy cóc bỏ qua Ảnh 2:** Thay vì `scrollBy(300)` cố định, quản lý chính xác biến `currentFrameIndex (0..11)` và hàm `scrollToFrame(index)` căn giữa đúng từng khung hình (`01A` $\rightarrow$ `02A` $\rightarrow$ `03A` ... $\rightarrow$ `12A`), đồng thời cập nhật huy hiệu `KHUNG 01 / 12` và viền sáng `.is-focused-frame`.

13. **Trang 12 / 12 (`data-page-index="11"`) — Trang Kết Thúc (`#closing-page-section`)**
    - Trang khép lại cuốn sổ lưu bút với con dấu sáp `12A2`, tiêu đề `HẸN NGÀY HỘI NGỘ!`, bức ảnh đêm lửa trại `img_10.jpg`, lời chúc 41 thành viên đỗ Tốt nghiệp 100% & đậu Nguyện vọng 1, kèm 2 nút điều hướng nhanh về Hòm Thư (`data-target-page="7"`) hoặc Trang Mở Đầu (`data-target-page="0"`).

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
2. **Tối ưu hiển thị trọn vẹn trong 1 màn hình điện thoại (Không cần cuộn 2–3 lần):**
   - **Đầu trang siêu gọn (`.floating-controls`):** Gộp tên `TRẠM KÝ ỨC 12A2`, huy hiệu `THPT PHÚ ĐIỀN • 2026 - 2027` và nút bật/tắt nhạc `Lofi: Bật` trên **1 thanh mảnh duy nhất (~34px)** dùng `position: sticky; top: 0;` (đã bỏ khối `.scrapbook-header` cồng kềnh chiếm chỗ ở đầu trang).
   - **Thanh điều hướng & mục lục 1 dòng (`.compact-book-nav`):** Tích hợp nút `<` (`#btn-prev-page`), thanh 10 nút `.bookmark-tab` trượt ngang 1 dòng (`flex-wrap: nowrap; overflow-x: auto;`) tự động căn giữa tab đang mở (`scrollIntoView`), và nút `>` (`#btn-next-page`).
   - **Cuối trang siêu mảnh (`.scrapbook-footer-mini`):** Đã bỏ khối footer lớn + thanh chuyển trang lặp lại ở đáy, thay bằng 1 dòng chữ ký mảnh duy nhất (~20px).
   - **Bên trong cả 10 trang:** Đã tinh chỉnh kích thước, khoảng đệm và lưới hiển thị trên mobile (`@media (max-width: 768px)`) để toàn bộ nội dung từ đầu đến cuối trang (đặc biệt là Bảng Đen, TV Kỷ Niệm, Polaroid 2x2, Bàn Sticker, Đèn Pin 41 tên) hiển thị trọn vẹn ngay trên 1 màn hình.
3. **Trạng thái gập kín ban đầu:**
   - Phong bì Intro và Thiệp Pop-up 3D (Trang 5) phải luôn ở trạng thái **gấp kín** khi tải trang để người xem tự tương tác mở.

---

## 7. PROMPT MẪU ĐỂ DÁN CHO AI MỚI (KHI HẾT TOKEN)

Nếu bạn cần chuyển sang một cuộc hội thoại AI mới, hãy copy đoạn sau gửi cho AI:

> *"Hãy đọc kỹ file `BAN_GHI_BAN_GIAO_AI.md` trong repo `thkcnpt-pixel/baotuong12a2` (đường dẫn local `/home/antigravity/thkcnpt-pixel/baotuong12a2/BAN_GHI_BAN_GIAO_AI.md`). Đó là toàn bộ kiến trúc, dữ liệu 41 học sinh 12A2 (niên khóa 2026 - 2027), 11 tính năng tương tác và các quy tắc thiết kế của dự án Trạm Ký Ức 12A2. Lưu ý: sau khi chỉnh sửa bất cứ gì, CHỈ cần commit và push lên GitHub (`origin/main`), không cần đồng bộ Google Drive. Sau khi đọc xong, hãy xác nhận đã nắm thông tin và chờ yêu cầu mới của tôi."*
