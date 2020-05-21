/**
 * Please change the cacheName.
 * Cache name can't be same with other app
 */
var cacheName = 'Pro7';
var filesToCache = [
    '/',
    '/js/framework7-lite.bundle.d.ts',
    '/js/framework7-lite.bundle.js',
    '/js/framework7-lite.bundle.min.js',
    '/js/framework7-lite.bundle.min.js.map',
    '/js/framework7-lite.d.ts',
    '/js/framework7-lite.js',
    '/js/framework7-lite.min.js',
    '/js/framework7-lite.min.js.map',
    '/js/framework7.bundle.d.ts',
    '/js/framework7.bundle.js',
    '/js/framework7.bundle.min.js',
    '/js/framework7.bundle.min.js.map',
    '/js/framework7.d.ts',
    '/js/framework7.js',
    '/js/framework7.min.js',
    '/js/framework7.min.js.map',
    '/css/custom.css',
    '/css/framework7-icons.css',
    '/css/framework7.bundle.css',
    '/css/framework7.bundle.min.css',
    '/css/framework7.bundle.rtl.css',
    '/css/framework7.bundle.rtl.min.css',
    '/css/framework7.css',
    '/css/framework7.rtl.css',
    '/css/framework7.rtl.min.css',
    '/fonts/Framework7Icons-Regular.eot',
    '/fonts/Framework7Icons-Regular.ttf',
    '/fonts/Framework7Icons-Regular.woff',
    '/fonts/Framework7Icons-Regular.woff2',
    '/fonts/material-icons.css',
    '/fonts/MaterialIcons-Regular.eot',
    '/fonts/MaterialIcons-Regular.ijmap',
    '/fonts/MaterialIcons-Regular.svg',
    '/fonts/MaterialIcons-Regular.ttf',
    '/fonts/MaterialIcons-Regular.woff',
    '/fonts/MaterialIcons-Regular.woff2',
    '/js_app/constant.js',
    '/js_app/init.js',
    '/js_app/routes.js',
    '/pages/404.html',
    '/pages/about.html',
    '/pages/home.html',
    'index.html'
    /**
     * You can add more file to cache from here.
     */
];

/**
 * Start the service worker and cache all of the app's content.
 */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/**
 * Serve cached content when offline.
 */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});