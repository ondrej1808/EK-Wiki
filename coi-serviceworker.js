/* coi-serviceworker — enable SharedArrayBuffer on GitHub Pages
 * Required by tikzjax (emscripten + pthreads WebAssembly).
 * Injects Cross-Origin-Opener-Policy + Cross-Origin-Embedder-Policy
 * headers so the page becomes cross-origin isolated.
 *
 * Based on https://github.com/gzuidhof/coi-serviceworker (MIT)
 */

if (typeof window === 'undefined') {
  /* ── Running as the actual Service Worker ── */

  self.addEventListener('install', () => self.skipWaiting());

  self.addEventListener('activate', event =>
    event.waitUntil(self.clients.claim())
  );

  self.addEventListener('fetch', event => {
    const { request } = event;

    // Skip opaque (only-if-cached + cross-origin) requests
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
      return;
    }

    event.respondWith(
      fetch(request)
        .then(response => {
          // Don't touch opaque / error responses
          if (response.status === 0) return response;

          const headers = new Headers(response.headers);
          headers.set('Cross-Origin-Opener-Policy', 'same-origin');
          // 'credentialless' allows cross-origin sub-resources (CDN fonts, WASM, etc.)
          headers.set('Cross-Origin-Embedder-Policy', 'credentialless');

          return new Response(response.body, {
            status:     response.status,
            statusText: response.statusText,
            headers,
          });
        })
        .catch(() => fetch(request))
    );
  });

} else {
  /* ── Running in the page — register ourselves as a SW ── */

  (() => {
    // Already isolated — nothing to do
    if (window.crossOriginIsolated) return;

    if (!navigator.serviceWorker) {
      console.warn('[coi-sw] Service workers not available.');
      return;
    }

    // currentScript.src gives us the absolute URL even on sub-paths like /cards/
    const swUrl = document.currentScript.src;

    navigator.serviceWorker
      .register(swUrl)
      .then(() => {
        // Once the SW is controlling the page, reload so it can inject headers
        navigator.serviceWorker.ready.then(() => {
          if (!window.crossOriginIsolated) {
            console.log('[coi-sw] Reloading to activate cross-origin isolation…');
            location.reload();
          }
        });
      })
      .catch(err => console.warn('[coi-sw] SW registration failed:', err));
  })();
}
