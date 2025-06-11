// Memanggil fungsi untuk mendaftarkan Service Worker saat file dimuat
registerSW();

// Fungsi untuk mendaftarkan Service Worker
async function registerSW() {
  // Mengecek apakah browser mendukung serviceWorker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan file sw.js sebagai service worker
      const registration = await navigator.serviceWorker.register("./sw.js");
      
      // Menampilkan pesan sukses di konsol
      console.log("Service worker registered", registration);
    } catch (error) {
      // Menampilkan error jika gagal registrasi
      showResult("Error while registering: " + error.message);
    }
  } else {
    // Jika browser tidak mendukung Service Worker
    showResult("Service workers API not available");
  }
};

// Fungsi untuk menampilkan hasil atau pesan ke elemen <output>
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
