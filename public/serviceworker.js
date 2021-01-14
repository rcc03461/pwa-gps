const CACHE_NAME = "version-1";
const urlToCache = [
    'index.html',
    'offline.html',
];

const self = this;
// install SW
self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache=>{
                console.log('Open Cache');
                return cache.addAll(urlToCache);
            })
    )
});

// Listen for request
self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
            .then(()=>{
                // console.log('fetched : ', req);
                return fetch(event.request)
                .catch(err=> caches.match('offline.html'))
            })
    )
});

// Activate SW
self.addEventListener('activate', (event)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then(cacheNames=>{
            cacheNames.map(cacheName =>{
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        })
    )
});