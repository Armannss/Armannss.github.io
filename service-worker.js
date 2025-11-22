self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // اینجا فعلاً کاری لازم نیست
});

self.addEventListener("fetch", (event) => {
  // فعلاً فقط درخواست‌ها رو عبور می‌دیم
});