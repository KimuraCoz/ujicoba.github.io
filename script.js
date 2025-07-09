document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen formulir kontak
    const contactForm = document.getElementById('contact-form');

    // Tambahkan event listener untuk mendengarkan saat formulir dikirim (submit)
    contactForm.addEventListener('submit', function(event) {
        // Mencegah perilaku default formulir (yaitu, refresh halaman)
        event.preventDefault();

        // Ambil data dari input formulir
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi sederhana: Pastikan semua kolom terisi
        if (name === '' || email === '' || message === '') {
            alert('Mohon isi semua kolom!');
            return; // Hentikan fungsi jika ada yang kosong
        }

        // Tampilkan pesan sukses
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');

        // Di sini Anda bisa menambahkan kode untuk mengirim data ke server atau email
        // Untuk saat ini, kita hanya akan menampilkan pesan alert.
        // Contoh:
        // console.log('Nama:', name);
        // console.log('Email:', email);
        // console.log('Pesan:', message);

        // Reset formulir setelah pengiriman berhasil
        contactForm.reset();
    });
});