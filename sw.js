self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open('バーコード作成').then(cache=>{
      return cache.addAll([
        '/',
        '/jquery-1.12.4.min.js',
        '/jquery-barcode.min.js',
        '/barcode.js',
        '/style.css',
        '/icon144.png',
        '/icon192.png'
      ])
      .then(()=>self.skipWaiting());
    })
  )
});
self.addEventListener('activate',event=>{
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch',event=>{
  event.respondWith(
    caches.match(event.request).then(response=>{
      return response||fetch(event.request);
    })
  );
});
