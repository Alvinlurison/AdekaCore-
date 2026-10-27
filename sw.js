const CACHE_NAME = "adekacore-v3";
const BASE = "/AdekaCore-/";
const FILES = [
  BASE,
  BASE + "index.html",
  BASE + "login.html",
  BASE + "workspace.html",
  BASE + "firebase-config.js",
  BASE + "manifest.json",
  BASE + "logo.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
