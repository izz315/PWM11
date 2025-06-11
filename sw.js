self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("pwa-assets").then(cache => {
      return cache.addAll([
        "./", 
        "./index.html", 
        "./app.js", 
        "./manifest.json",
        "./icons8-instagram-50.png", 
        "./icons8-linkedin-50.png",
        "./icons8-whatsapp-50.png", 
        "./icons8-x-50.png", 
        "./izz.jpg", 
        "./apkicon.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
