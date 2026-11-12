/*
 * GenOrbit service worker
 * Keeps a copy of GenOrbit's own files, so the installed app also starts without internet.
 * Online services (NCBI, UniProt, EBI, InterPro, AlphaFold, STRING, …) are never cached or changed:
 * only requests to this site's own address pass through here.
 * Each start asks the site for the newest GenOrbit.html first and uses the saved copy only when
 * there is no connection, so an updated GenOrbit.html on GitHub is used straight away.
 */
const CACHE = 'genorbit-v1';
const FILES = ['./GenOrbit.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './favicon-32.png'];

self.addEventListener('install', event => {
  // a file missing on the server is skipped, never a reason not to start
  event.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('genorbit-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;              // online services: straight to the network, untouched
  event.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') {
        const copy = res.clone(), key = url.origin + url.pathname;   // one copy per file, whatever follows the “?”
        event.waitUntil(caches.open(CACHE).then(c => c.put(key, copy)));
      }
      return res;
    } catch (err) {                                               // offline: the saved copy
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) return cached;
      if (req.mode === 'navigate') return (await caches.match('./GenOrbit.html')) || Response.error();
      return Response.error();
    }
  })());
});
