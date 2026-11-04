# Thư mục này đang TẮT TẠM THỜI

Đây là trang chi tiết của một sản phẩm (ví dụ `nhathuocthienhanh.com/san-pham/paracetamol-500mg/`).

## Vì sao tắt?

Next.js bắt buộc phải biết trước danh sách sản phẩm mới tạo được các trang
chi tiết. Hiện `lib/data.ts` chưa có sản phẩm nào (chờ danh sách thật của nhà
thuốc), nên nếu để nguyên thì **toàn bộ website không build được**:

```
Error: Page "/san-pham/[slug]" is missing "generateStaticParams()"
so it cannot be used with "output: export" config.
```

Dấu gạch dưới ở đầu tên thư mục (`_slug`) làm Next.js bỏ qua, không coi đây là
một trang web nữa. Code bên trong vẫn giữ nguyên, không mất gì.

## Khi có danh sách sản phẩm thật thì làm gì?

1. Thêm sản phẩm vào `lib/data.ts` (xem hướng dẫn mẫu ngay trong file đó).
2. Đổi tên thư mục này từ `_slug` trở lại thành `[slug]` — nhớ có dấu ngoặc vuông.
3. Xoá file `DOC-FILE-NAY-TRUOC.md` này đi.
4. Chạy lại build.

Làm xong 4 bước trên là mỗi sản phẩm sẽ tự có một trang riêng trở lại.
