# pomodoro-website
Learning Assistance Website

Berikut adalah penjelasan cara kerja website Learning Assistance:

 1. Pomodoro Timer
Fungsi: Membantu pengguna untuk mengelola waktu belajar menggunakan teknik Pomodoro (sesi belajar diikuti dengan sesi istirahat).

Cara Kerja:
- Input Waktu:
  - Pengguna dapat mengatur durasi waktu belajar (default: 25 menit) dan waktu istirahat (default: 5 menit).
  - Input ini diambil dari elemen `<input>` dengan ID `work-time` dan `break-time`.

- Timer Berjalan:
  - Saat tombol Start ditekan:
    - Timer mulai menghitung mundur dari waktu yang telah ditentukan.
    - Setiap detik, timer diperbarui dan ditampilkan pada elemen dengan ID `timer`.
  - Ketika waktu belajar habis:
    - Timer secara otomatis beralih ke sesi istirahat, dan total waktu belajar bertambah.
  - Ketika waktu istirahat habis:
    - Timer kembali ke sesi belajar, dan total waktu istirahat bertambah.

- **Penyimpanan Data:
  - Status timer (sisa waktu, total waktu belajar/istirahat, dll.) disimpan di localStorage, sehingga tidak hilang meskipun pengguna menutup browser.

- Tombol Tambahan:
  - Pause: Menghentikan sementara timer.
  - Reset: Mengatur ulang timer ke waktu awal (baik belajar atau istirahat).

- Motivasi:
  - Setelah setiap sesi selesai, pesan motivasi acak ditampilkan untuk memberi semangat kepada pengguna.

---

2. To-Do List
Fungsi: Membantu pengguna mencatat tugas-tugas yang harus diselesaikan.

Cara Kerja:
- Menambahkan Tugas:
  - Pengguna mengetik tugas di kolom input dan menekan tombol Add Task.
  - Tugas baru ditambahkan sebagai elemen daftar dalam elemen `<ul>` dengan ID `task-list`.
  
- Interaksi dengan Tugas:
  - Setiap tugas memiliki dua tombol:
    - ✔ (Complete): Menandai tugas sebagai selesai dengan menambahkan garis coret dan efek visual.
    - ✖ (Delete): Menghapus tugas dari daftar.

- **Penyimpanan Data:
  - Daftar tugas disimpan di localStorage dalam bentuk array JSON. Ini memastikan daftar tetap ada meskipun pengguna menutup browser.

- Muat Data:
  - Saat halaman dimuat, daftar tugas diambil dari localStorage dan ditampilkan kembali.



3. Spotify Player
Fungsi: Memutar playlist musik dari Spotify untuk menemani belajar.

Cara Kerja:
- **Memuat Playlist:
  - Pengguna dapat memasukkan URL playlist Spotify ke dalam kolom input.
  - URL diubah ke format embed (`/playlist/` menjadi `/embed/playlist/`) dan ditampilkan di dalam elemen `<iframe>`.

- **Pemutar Default:
  - Jika pengguna tidak memasukkan URL baru, player default akan menampilkan playlist bawaan.

---

Fitur Tambahan:
1. Tampilan Responsif:
   - Menggunakan Bootstrap, website dapat diakses dengan baik di berbagai ukuran layar (desktop, tablet, atau smartphone).

2. Desain yang Menarik:
   - Elemen seperti motivasi, timer, daftar tugas, dan player Spotify dirancang agar mudah digunakan dan menarik secara visual.

3. Penggunaan Local Storage:
   - Data timer dan daftar tugas disimpan di browser, sehingga pengguna tidak kehilangan data meskipun mereka menutup atau me-refresh halaman.

---

Alur Penggunaan Website:
1. Pomodoro Timer:
   - Atur waktu belajar/istirahat, lalu tekan tombol Start untuk memulai sesi.
   - Ikuti sesi belajar dan istirahat sesuai waktu yang telah diatur.

2. To-Do List:
   - Tambahkan daftar tugas yang ingin diselesaikan.
   - Tandai tugas yang selesai atau hapus jika tidak diperlukan lagi.

     

3. **Spotify Player:**
   - Masukkan URL playlist favorit Anda untuk menikmati musik selama belajar.

---

Jika Anda ingin pengembangan lebih lanjut (seperti menambahkan statistik lebih detail atau fitur lain), beri tahu saya! 😊
