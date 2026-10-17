// Influentia School: service worker vacío. No guarda nada. Solo ocupa el ámbito de la School.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
