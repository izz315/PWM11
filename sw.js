// Event 'install' akan dijalankan saat service worker pertama kali dipasang
self.addEventListener("install", event => {
  event.waitUntil(
    // Membuka cache bernama "pwa-assets"
    caches.open("pwa-assets").then(cache => {
      // Menambahkan file-file penting ke dalam cache
      return cache.addAll([
        "./",                    // root
        "./index.html",         // halaman utama
        "./app.js",             // file JavaScript utama
        "./manifest.json",      // manifest PWA
        "./icons8-instagram-50.png", // ikon Instagram
        "./icons8-linkedin-50.png",  // ikon LinkedIn
        "./icons8-whatsapp-50.png",  // ikon WhatsApp
        "./icons8-x-50.png",         // ikon X/Twitter
        "./izz.jpg",            // foto profil
        "./apkicon.jpg"         // ikon aplikasi
      ]);
    })
  );
});

// Event 'fetch' akan menangani setiap permintaan sumber daya (asset)
self.addEventListener("fetch", event => {
  event.respondWith(
    // Mencoba mencocokkan permintaan dengan cache
    caches.match(event.request).then(cachedResponse => {
      // Jika ada di cache, kembalikan dari cache. Jika tidak, ambil dari jaringan.
      return cachedResponse || fetch(event.request);
    })
  );
});
