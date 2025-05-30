self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("bateria-cache").then(function (cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js",
        "./manifest.json",
        "./service-worker.js",
        "./sounds/snare.wav",
        "./sounds/kick.wav",
        "./icon-192.png",
        "./icon-512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
