self.addEventListener('fetch', function(event) {
  // This is a basic service worker that allows the "Install" prompt to trigger.
  event.respondWith(fetch(event.request));
});
