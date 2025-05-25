# CÔNG TY CỔ PHẦN TẬP ĐOÀN JG GROUPGROUP

This is the source code of the official website of IG Group Corporation.

### Instructions for Editing and Installation

After editing the code, build it to generate the file before deploying.

`npm run build`

Then, run the command `firebase deploy` to deploy it to Firebase.

### 🧱 2. Công nghệ đề xuất
Frontend: React + TypeScript + SCSS (Sass)

Backend: Node.js

Database: MySQL (dùng để lưu đơn hàng, tài khoản, lịch sử thanh toán,…)

Thanh toán: Tích hợp cổng: Momo, VietQR, Banking, Visa.

Quản trị: Có trang quản trị để quản lý người dùng, đơn hàng, số dư, thống kê,…

###  🔐 3. Các chức năng chính cần có
A. Trang chính (Client)
1. Trang chủ (Landing page)
Giới thiệu dịch vụ buff

Các loại dịch vụ (Facebook, TikTok, YouTube, Instagram,...)

Bảng giá tham khảo

Các gói khuyến mãi

Testimonal (đánh giá người dùng)

Call to Action (đăng ký/đăng nhập)

### 2. Đăng ký / Đăng nhập
Tài khoản người dùng

Xác thực qua email/SMS nếu cần

(Admin có thể tạo tài khoản cho cộng tác viên)

###  3. Trang Dashboard người dùng
Số dư hiện tại

Tạo đơn hàng mới

Lịch sử đơn hàng

Trạng thái đơn hàng (pending, success, error…)

Nạp tiền vào tài khoản (xem phần thanh toán)

### 4. Tạo đơn hàng Buff
Chọn loại dịch vụ (ví dụ TikTok Follow, YouTube View,…)

Nhập link / user cần buff

Nhập số lượng

Tự động tính tiền và trừ số dư

Gửi đơn hàng qua API đến đối tác trung gian

### 5. Lịch sử đơn hàng
Xem tất cả đơn đã đặt

Tình trạng đơn: Pending / Processing / Success / Failed

Có thể lọc theo thời gian, loại dịch vụ

### 6. Nạp tiền / Tự động nạp
Tích hợp Momo / VietQR / Banking / Thẻ cào

Tạo mã nạp tiền riêng cho từng tài khoản

Xử lý callback từ hệ thống trung gian để cộng tiền tự động

Lịch sử giao dịch

### 7. Trang tài khoản cá nhân
Xem thông tin tài khoản

Đổi mật khẩu

Lịch sử hoạt động

## B. Quản trị (Admin Dashboard)
### 1. Quản lý người dùng
Danh sách user

Trạng thái (active / banned)

Số dư hiện tại

Reset mật khẩu, nạp tay nếu cần

### 2. Quản lý đơn hàng
Xem toàn bộ đơn người dùng

Theo dõi trạng thái đơn

Gửi lại đơn nếu thất bại

Cập nhật trạng thái đơn (qua API từ nhà cung cấp)

### 3. Quản lý API Key từ nhà cung cấp
Danh sách nhà cung cấp

API key, endpoint

Kiểm tra số dư nhà cung cấp

Thay đổi mức độ ưu tiên khi gửi đơn (ưu tiên server nào)

### 4. Quản lý dịch vụ
Thêm/sửa/xoá loại dịch vụ (ví dụ Facebook Like, TikTok Follow,...)

Đặt giá cho từng dịch vụ

Ẩn hiện dịch vụ tùy nhóm user (ví dụ cộng tác viên thấy nhiều dịch vụ hơn)

### 5. Quản lý nạp tiền
Xem danh sách giao dịch

Cập nhật trạng thái nạp

Tạo mã thanh toán thủ công

### 6. Thống kê
Doanh thu theo ngày/tháng

Số lượng đơn theo dịch vụ

Tỷ lệ đơn thành công/thất bại

Biểu đồ số liệu

## 💳 4. Tích hợp thanh toán tự động
Cách phổ biến:
Auto Momo, VietQR: Dùng dịch vụ trung gian như momo.topupapi.net, thesieutoc.net, vietqr.io,… để tạo mã QR nạp tiền riêng cho từng user.

Auto Thẻ cào: Dùng API của trumthe.vn, cardvip.vn, doithe24h,...

Hệ thống của bạn sẽ lắng nghe webhook từ trung gian và cộng tiền tự động vào tài khoản user.
