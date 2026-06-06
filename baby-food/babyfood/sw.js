const CACHE_NAME = 'awalem-babyfood-v5';
const ASSETS = [
    './',
    './index.html',
    './data.js',
    './manifest.json'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() =>
            caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(response => {
            if (response && response.status === 200) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
            }
            return response;
        }).catch(() => caches.match(e.request))
    );
});