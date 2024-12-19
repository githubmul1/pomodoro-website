# pomodoro-website
Learning Assistance Website

Berikut adalah penjelasan cara kerja website Learning Assistance:

Berikut adalah penjelasan yang lebih lengkap dan rinci tentang cara kerja website yang diberikan pada kode tersebut:

### 1. **Pomodoro Timer**
   **Tujuan**: Fitur ini membantu pengguna untuk mengelola waktu belajar menggunakan teknik Pomodoro, di mana sesi belajar dilakukan dalam interval waktu tertentu diikuti dengan waktu istirahat. 

   - **Pengaturan Waktu**:
     - Pengguna dapat mengatur durasi waktu belajar (work time) dan durasi waktu istirahat (break time) menggunakan input *number* di bagian "Set Work Time (minutes)" dan "Set Break Time (minutes)".
     - Waktu default untuk sesi belajar adalah 25 menit dan untuk istirahat adalah 5 menit.
   
   - **Menjalankan Timer**:
     - Ketika tombol "Start" ditekan, timer mulai berjalan. Timer akan menghitung mundur setiap detik dari waktu yang ditentukan.
     - Setiap detik yang berlalu akan ditampilkan dalam format menit:detik di bagian **Timer**.
     - Timer akan beralih antara sesi belajar dan sesi istirahat ketika waktu untuk sesi saat ini habis. Misalnya, setelah sesi belajar selesai, website akan memberi pemberitahuan dan timer akan beralih ke sesi istirahat.

   - **Status Timer**:
     - Jika pengguna menekan tombol "Pause", timer akan berhenti sementara (pause) dan bisa dilanjutkan dengan tombol "Start" lagi.
     - Tombol "Reset" akan mengembalikan timer ke status awal (baik sesi belajar atau sesi istirahat) sesuai pengaturan awal yang telah dimasukkan.

   - **Pesan Motivasi**:
     - Setelah setiap sesi selesai, website akan menampilkan pesan motivasi secara acak di bagian **Motivation**. Pesan ini berfungsi untuk memotivasi pengguna agar tetap semangat dalam belajar.

   - **Statistik**:
     - Setiap kali sesi kerja atau sesi istirahat selesai, total waktu belajar dan total waktu istirahat akan diperbarui.
     - Data statistik ditampilkan di bagian **Stats**, yang menunjukkan berapa lama pengguna telah belajar dan beristirahat sejak terakhir kali timer di-reset atau dimulai.
     - Data statistik disimpan di **localStorage**, sehingga ketika halaman dimuat ulang, data waktu yang telah terakumulasi tidak hilang.

   - **Penyimpanan dan Pemulihan Status**:
     - Status timer disimpan di **localStorage** menggunakan `localStorage.setItem` setiap detik, termasuk informasi tentang waktu yang tersisa, status apakah timer dalam kondisi pause, dan apakah sedang dalam sesi kerja atau istirahat.
     - Ketika halaman dimuat ulang, status timer dimuat kembali menggunakan `localStorage.getItem`, dan timer akan melanjutkan dari posisi terakhir.

### 2. **To-Do List**
   **Tujuan**: Fitur ini memungkinkan pengguna untuk mencatat tugas-tugas yang perlu diselesaikan, serta memberikan kemampuan untuk menandai tugas sebagai selesai atau menghapusnya.

   - **Menambahkan Tugas**:
     - Pengguna dapat menambahkan tugas dengan mengetikkan deskripsi tugas pada input **"Enter a new task"** dan menekan tombol **"Add Task"**. Tugas tersebut akan muncul dalam daftar di bagian bawah di dalam elemen `<ul>`.
   
   - **Menandai Tugas Selesai**:
     - Setiap item tugas yang ditambahkan memiliki dua tombol: satu untuk menandai tugas sebagai selesai ("✔") dan satu lagi untuk menghapus tugas ("✖").
     - Ketika tombol **"✔"** ditekan, tugas akan diberi tanda garis melalui (strike-through) dan ditandai sebagai selesai. Status ini akan disimpan dalam `localStorage`.
   
   - **Menghapus Tugas**:
     - Tombol **"✖"** digunakan untuk menghapus tugas dari daftar. Begitu tugas dihapus, perubahan tersebut akan disimpan dalam `localStorage`.
   
   - **Penyimpanan dan Pemulihan Data**:
     - Daftar tugas disimpan dalam **localStorage** untuk memastikan bahwa ketika halaman dimuat ulang, daftar tugas tetap ada, dan status setiap tugas (apakah selesai atau belum) akan dipulihkan.

### 3. **Spotify Player**
   **Tujuan**: Fitur ini memungkinkan pengguna untuk memutar playlist Spotify langsung dari halaman web menggunakan *iframe*.

   - **Memasukkan URL Playlist**:
     - Pengguna dapat memasukkan URL playlist Spotify yang diinginkan di dalam input **"Spotify Playlist URL"**.
     - Setelah memasukkan URL, pengguna dapat menekan tombol **"Load Playlist"** untuk memuat playlist tersebut di dalam *iframe* yang terdapat di bagian bawah.
   
   - **Format URL**:
     - URL yang dimasukkan oleh pengguna akan dipastikan dalam format yang benar untuk pemutaran *embed*. Jika URL yang dimasukkan tidak dalam format embed, URL tersebut akan diubah dengan menambahkan string `/embed/` untuk membuatnya sesuai dengan format yang diperlukan untuk diputar dalam *iframe*.
   
   - **Memutar Playlist**:
     - Setelah URL yang valid dimasukkan, playlist Spotify akan ditampilkan di dalam *iframe* dan mulai diputar di dalam website.

### 4. **Penyimpanan dan Pemulihan Status Secara Umum**
   Website ini menggunakan **localStorage** untuk menyimpan berbagai data yang berkaitan dengan status Pomodoro Timer, daftar tugas, dan bahkan URL Spotify Playlist yang dimasukkan.

   - **Data yang Disimpan**:
     - Untuk **Pomodoro Timer**, data yang disimpan meliputi waktu yang tersisa dalam sesi (baik sesi kerja maupun istirahat), apakah timer sedang dalam status pause, status sesi (apakah sedang belajar atau istirahat), serta total waktu belajar dan istirahat.
     - Untuk **To-Do List**, data yang disimpan meliputi daftar tugas, serta apakah setiap tugas sudah diselesaikan atau belum.
   
   - **Pemulihan Status**:
     - Ketika halaman dimuat ulang, data yang telah disimpan di **localStorage** akan dipulihkan. Misalnya, waktu yang tersisa pada timer akan dipulihkan, daftar tugas yang telah ditambahkan akan dimuat kembali, dan playlist Spotify yang dimasukkan akan tetap tampil di *iframe*.

### 5. **Interaksi Antar Fitur**
   Ketiga fitur ini bekerja secara terpisah, namun mereka dapat saling melengkapi dalam meningkatkan pengalaman belajar pengguna:
   - **Pomodoro Timer** memberikan sesi fokus untuk belajar yang dibarengi dengan waktu istirahat untuk menjaga konsentrasi.
   - **To-Do List** membantu pengguna merencanakan dan melacak tugas yang perlu diselesaikan selama waktu belajar.
   - **Spotify Player** menyediakan musik atau playlist yang bisa diputar untuk menemani sesi belajar, menambah kenyamanan dan suasana yang kondusif untuk fokus.

### 6. **Tata Letak dan Tampilan**
   - **Bootstrap** digunakan untuk mempermudah tata letak dan membuat halaman menjadi responsif, sehingga tampilan akan menyesuaikan dengan ukuran layar perangkat yang digunakan.
   - **CSS Kustom** digunakan untuk memberikan desain yang lebih menarik dengan penyesuaian warna dan gaya pada elemen-elemen seperti tombol, header, timer, dan daftar tugas.

### 7. **Cara Kerja Interaksi Pengguna**
   - Pengguna dapat menyesuaikan pengaturan waktu pada Pomodoro Timer, menambahkan tugas ke To-Do List, dan memuat playlist Spotify sesuai preferensi mereka.
   - Setiap interaksi (misalnya, menekan tombol start, menambahkan tugas, memuat playlist) akan mempengaruhi tampilan atau status website, dan perubahan tersebut disimpan agar pengguna tidak kehilangan data saat memuat ulang halaman.

Dengan begitu, website ini memberikan pengalaman belajar yang lebih terstruktur dengan manajemen waktu yang jelas, pengorganisasian tugas yang rapi, serta suasana belajar yang lebih menyenangkan dengan musik.
