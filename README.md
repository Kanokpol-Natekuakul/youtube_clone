# YouTube Clone

โปรเจกต์นี้เป็น YouTube Clone ที่พัฒนาด้วย React และ Vite มีฟีเจอร์หลักๆ เหมือนกับ YouTube จริง

## 🚀 ฟีเจอร์

### หน้าหลัก (Main Page)
- **แสดงรายการวิดีโอ**: แสดงวิดีโอในรูปแบบตารางสามคอลัมน์
- **Shorts Section**: แสดงวิดีโอสั้นๆ ในรูปแบบแนวนอน
- **ระบบแท็ก**: มีแท็กสำหรับกรองเนื้อหา
- **การแสดงผลข้อมูล**: วันที่อัปโหลด, จำนวนการดู, ชื่อช่อง

### ระบบค้นหา (Search System)
- **ค้นหาแบบเรียลไทม์**: ค้นหาวิดีโอตามคำค้น
- **หน้าผลการค้นหา**: แสดงผลลัพธ์ในเลย์เอาต์แยกต่างหาก
- **การนำทาง**: ใช้ React Router สำหรับเปลี่ยนหน้า

### ระบบการติดตาม (Subscription System)
- **รายการช่องที่ติดตาม**: แสดงช่องที่ผู้ใช้ติดตามใน Sidebar
- **ข้อมูลช่อง**: แสดงรูปโปรไฟล์และชื่อช่อง

### เลย์เอาต์และ UI
- **Navigation Bar**: แถบนำทางด้านบนพร้อมช่องค้นหา
- **Sidebar**: เมนูด้านข้างสำหรับนำทางและรายการการติดตาม
- **Responsive Design**: ออกแบบให้รองรับหน้าจอขนาดต่างๆ

## 🛠️ เทคโนโลยีที่ใช้

- **React 19.1.0**: JavaScript Library สำหรับสร้าง User Interface
- **Vite**: Build Tool และ Development Server
- **React Router DOM 7.7.1**: สำหรับจัดการการนำทางระหว่างหน้า
- **CSS Grid & Flexbox**: สำหรับจัดวาง Layout
- **ESLint**: สำหรับตรวจสอบคุณภาพโค้ด

## 📁 โครงสร้างโปรเจกต์

```
src/
├── components/
│   ├── Card/
│   │   ├── CardVideo.jsx      # การ์ดแสดงวิดีโอปกติ
│   │   ├── CardShorts.jsx     # การ์ดแสดง Shorts
│   │   └── CardSearch.jsx     # การ์ดแสดงผลการค้นหา
│   ├── Contents/
│   │   ├── Content.jsx        # หน้าเนื้อหาหลัก
│   │   └── ContentStyle.css   # สไตล์สำหรับเนื้อหา
│   ├── Nav/
│   │   ├── Nav.jsx           # แถบนำทาง
│   │   └── NavStyle.css      # สไตล์แถบนำทาง
│   ├── Search/
│   │   └── Searchbox.jsx     # ช่องค้นหา
│   ├── Sidebar/
│   │   ├── Sidebar.jsx       # แถบด้านข้าง
│   │   └── SidebarStyle.css  # สไตล์แถบด้านข้าง
│   └── Tags/
│       ├── Tags.jsx          # แท็กกรองเนื้อหา
│       └── TagsStyle.css     # สไตล์แท็ก
├── layout/
│   ├── MainLayout.jsx        # เลย์เอาต์หน้าหลัก
│   ├── SearchPage.jsx        # หน้าผลการค้นหา
│   └── search.css           # สไตล์หน้าค้นหา
├── App.jsx                   # Component หลัก
└── main.jsx                 # Entry Point
```

## 🔧 การติดตั้งและใช้งาน

### ติดตั้ง Dependencies
```bash
npm install
```

### รันในโหมด Development
```bash
npm run dev
```

### Build สำหรับ Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### ตรวจสอบโค้ดด้วย ESLint
```bash
npm run lint
```

## 🌐 API Endpoints

โปรเจกต์นี้คาดหวังให้มี Backend API ที่ทำงานบน `http://localhost:3000` พร้อม endpoints ดังนี้:

- `GET /` - ดึงข้อมูลวิดีโอทั้งหมด
- `GET /subscribe?user_id=1` - ดึงรายการช่องที่ติดตาม
- `GET /result?search_query={query}` - ค้นหาวิดีโอ

### รูปแบบข้อมูลที่คาดหวัง

#### วิดีโอ
```json
{
  "video_title": "ชื่อวิดีโอ",
  "video_thumbnail": "URL รูปภาพ",
  "channel_name": "ชื่อช่อง",
  "channel_profile_picture": "URL รูปโปรไฟล์",
  "view_count": 12345,
  "video_created_at": "2024-01-01T00:00:00Z"
}
```

#### การติดตาม
```json
{
  "channel_name": "ชื่อช่อง",
  "channel_profile_picture": "URL รูปโปรไฟล์"
}
```

## ✨ ฟีเจอร์พิเศษ

### การแปลงจำนวนการดู
ระบบจะแปลงจำนวนการดูให้เป็นภาษาไทย:
- 1,000+ → "X พัน ครั้ง"
- 10,000+ → "X หมื่น ครั้ง"
- 100,000+ → "X แสน ครั้ง"
- 1,000,000+ → "X ล้าน ครั้ง"

### การแสดงวันที่
คำนวณและแสดงจำนวนวันที่ผ่านมาจากวันที่อัปโหลด

### Grid Layout
- **หน้าหลัก**: วิดีโอแสดงแบบ 3 คอลัมน์
- **Shorts**: แสดงแบบ 5 คอลัมน์
- **ผลการค้นหา**: แสดงแบบ 1 คอลัมน์

## 🎨 การปรับแต่ง CSS

โปรเจกต์ใช้ CSS Variables และ CSS Grid สำหรับการจัดวาง สามารถปรับแต่งสีและขนาดได้ง่าย:

```css
/* ตัวแปรสีหลัก */
#0f0f0f - ข้อความหลัก
#606060 - ข้อความรอง
#f2f2f2 - พื้นหลังรอง
#e5e5e5 - เส้นขอบ
```

## 📝 การพัฒนาต่อ

### เพิ่มฟีเจอร์ใหม่
1. ระบบล็อกอิน/สมัครสมาชิก
2. ระบบคอมเมนต์
3. ระบบไลค์/ดิสไลค์
4. เพลย์ลิสต์
5. การอัปโหลดวิดีโอ

### ปรับปรุง UX/UI
1. Loading States
2. Error Handling
3. Infinite Scroll
4. Dark Mode
5. Mobile Responsive

