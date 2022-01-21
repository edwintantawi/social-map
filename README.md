# SocialMap

Sosial media berbasis map

# Tech stack

- Javascript
- NodeJS
- MySQL
- Cloudinary
- PassportJS
- Sequelize

# Setup project

## Setup Database

- Nama Database: `social_map`
- Tabel Database:
  - `threads`
  - `users`

_dapat menggunakan sequelize sync models_

## Enviroment variabels

- buat file dengan nama `.env`
- copy isi file `.env.example` ke file `.env`
- isi value yang sesuai dengan konteks nya

## Running app

- jalankan `npm install` untuk menginstall semua package yang di perlukan
- pastikan Database dan Enviroment variabel sudah di sesuaikan
- jalankan `npm start` untuk menjalankan server, atau jika ingin menjalankan pada tahap development silahkan jalankan `npm run start:dev`
- Silahkan buka pada browser url server yang sedang berjalan
- Izinkan pengaksesan GPS untuk menggunakan fitur map agar berfungsi dengan baik.

# Features

- Menampilkan thread/post pada halaman home
- Menambahkan thread/post
  - Mencantumkan atau tidak lokasi user sekarang menggunakan GPS
  - Menambahkan gambar
  - Menambahkan caption
- Menampilkan thread/post dalam bentuk map bagi yang mencantumkan lokasi
  - Setiap thread/post pada map dapat di tekan untuk melihat thread/post
- menampilkan halaman user profile
- authentication dan authorization

# Credits

- UI Design inspiration: https://dribbble.com/shots/15909980-Social-Media-App-Design-Concept/attachments/7739683?mode=media
