const CACHE_NAME = "adekacore-v4";
const BASE = "/AdekaCore-/";
const FILES = [
  BASE,
  BASE + "index.html",
  BASE + "login.html",
  BASE + "workspace.html",
  BASE + "privacy.html",
  BASE + "terms.html",
  BASE + "firebase-config.js",
  BASE + "manifest.json",
  BASE + "logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});

self.addEventListener("message", event => {
  if (event.data && event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
