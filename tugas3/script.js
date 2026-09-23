const bilanganPertama = document.getElementById('bil1');
const bilanganKedua = document.getElementById('bil2');
const hasil = document.getElementById('hasil');

function ambilBilangan() {
    const bil1 = Number(bilanganPertama.value);
    const bil2 = Number(bilanganKedua.value);

    if (bilanganPertama.value === '' || bilanganKedua.value === '') {
        alert('Silakan isi kedua bilangan terlebih dahulu.');
        return null;
    }

    return { bil1, bil2 };
}

function tampilkanHasil(nilai) {
    hasil.value = nilai;
}

function tambah() {
    const bilangan = ambilBilangan();
    if (bilangan) tampilkanHasil(bilangan.bil1 + bilangan.bil2);
}

function kurang() {
    const bilangan = ambilBilangan();
    if (bilangan) tampilkanHasil(bilangan.bil1 - bilangan.bil2);
}

function kali() {
    const bilangan = ambilBilangan();
    if (bilangan) tampilkanHasil(bilangan.bil1 * bilangan.bil2);
}

function bagi() {
    const bilangan = ambilBilangan();
    if (!bilangan) return;

    if (bilangan.bil2 === 0) {
        alert('Bilangan kedua tidak boleh nol untuk pembagian.');
        return;
    }

    tampilkanHasil(bilangan.bil1 / bilangan.bil2);
}
