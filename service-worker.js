self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/app.js',
          '/style.css',
          '/manifest.json',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });