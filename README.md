Deskripsi Proyek: CRUD API & HTTP Testing
Proyek ini adalah aplikasi RESTful API sederhana yang dibangun menggunakan Node.js dan framework Express. Aplikasi ini mensimulasikan sistem manajemen data pengguna (User Management) dengan operasi dasar CRUD (Create, Read, Update, Delete).

🛠️ Teknologi yang Digunakan
Node.js: Runtime environment untuk menjalankan JavaScript di sisi server.

Express.js: Framework minimalis untuk membangun web application dan API.

REST Client (VS Code Extension): Alat untuk melakukan pengujian HTTP langsung dari editor kode.

Git & GitHub: Untuk version control dan penyimpanan repositori kode.

📂 Penjelasan Struktur File
server.js: File utama (entry point) yang berisi logika server, pengaturan rute (routes), dan manipulasi data user di dalam memori (array).

test.http: File dokumentasi sekaligus alat uji. Berisi kumpulan request (GET, POST, PUT, DELETE) untuk memastikan setiap fungsi API berjalan dengan benar.

package.json: File konfigurasi Node.js yang mencatat dependensi proyek (seperti Express) dan informasi proyek.

.gitignore: Berisi daftar file atau folder (seperti node_modules) yang tidak perlu diunggah ke GitHub agar repositori tetap bersih dan ringan.

🚀 Alur Kerja API (Endpoint)
Proyek ini menyediakan 5 endpoint utama:

GET /users: Mengambil seluruh daftar pengguna.

GET /users/:id: Mencari data pengguna spesifik berdasarkan ID-nya.

POST /users: Menambahkan pengguna baru ke dalam sistem.

PUT /users/:id: Memperbarui data pengguna yang sudah ada berdasarkan ID.

DELETE /users/:id: Menghapus data pengguna dari sistem.
