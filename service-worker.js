self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("neet-tracker-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json"
        // add CSS, JS files if you split them later
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
