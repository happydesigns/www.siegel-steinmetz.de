import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"88c3-0CnJO7vn6WSaehx0qbEzcc22ROY\"",
    "mtime": "2021-10-12T17:16:53.735Z",
    "path": "../public/200.html"
  },
  "/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"b11-c1xpuLb/XdwhiK/rnA+2mduzymg\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/android-chrome-192x192.png"
  },
  "/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"1ead-QdEyq/JpVUzz5GCBIMXacU1mTMQ\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/android-chrome-512x512.png"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"689-VKnCs2G9bRn5v61ZM0yDUCysf2M\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/apple-touch-icon.png"
  },
  "/banner.webp": {
    "type": "image/webp",
    "etag": "\"10f7e-glm9uAFMdALZRz86ph6pxnpQL3Q\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/banner.webp"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"24a-N3NmJ4I/Ce3JV+a9MPqzknl6jgU\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"312-BpzzoJwEOzFN2IPlzzhSeC3E78k\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-4+k9a/2aetyFovjczb2JYtHdgm4\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/favicon.ico"
  },
  "/grabmale.webp": {
    "type": "image/webp",
    "etag": "\"e2b0-xmesSD/0uYvP3wFw9JBltAD+Udk\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/grabmale.webp"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"88c3-0CnJO7vn6WSaehx0qbEzcc22ROY\"",
    "mtime": "2021-10-12T17:16:53.647Z",
    "path": "../public/index.html"
  },
  "/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"5c8-4rbIaueOa0csccKrp9Ny58BXIlE\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/mstile-150x150.png"
  },
  "/restaurierungen.webp": {
    "type": "image/webp",
    "etag": "\"2d84-2kxDJyA0vGHAm0JVGEqRFQ9C8bA\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/restaurierungen.webp"
  },
  "/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"85e-+wCNdHYHHzIJc9+8ynWXhRnzkvU\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/safari-pinned-tab.svg"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"1d0-JcpVV+HypxRXqt+Qhh3Ubs2rfcI\"",
    "mtime": "2021-10-12T17:16:46.119Z",
    "path": "../public/site.webmanifest"
  },
  "/_nuxt/180fb24.js": {
    "type": "application/javascript",
    "etag": "\"d9f-H8IDNBhfhW09CDRUfM8r4/lq0xg\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/180fb24.js"
  },
  "/_nuxt/259bb8e.js": {
    "type": "application/javascript",
    "etag": "\"734a-xZPNWzErSoJF2yL0wfgUF4LTRG8\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/259bb8e.js"
  },
  "/_nuxt/36527e2.js": {
    "type": "application/javascript",
    "etag": "\"44b-vq5MbKeOt4pkC54SAQ1yZhBhmig\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/36527e2.js"
  },
  "/_nuxt/38ca723.js": {
    "type": "application/javascript",
    "etag": "\"191c-L90DQZHbqCrbQtGCfoLxmZZ/iGI\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/38ca723.js"
  },
  "/_nuxt/3f0d00f.js": {
    "type": "application/javascript",
    "etag": "\"805c8-6C+HA1YFHmDHoVt/WuJcAB5ZuVc\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/3f0d00f.js"
  },
  "/_nuxt/43a1e3e.js": {
    "type": "application/javascript",
    "etag": "\"415-PWfOFUy7v1cTsTqjn+9vxtA5jhM\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/43a1e3e.js"
  },
  "/_nuxt/4a17f15.js": {
    "type": "application/javascript",
    "etag": "\"4709-lyguKLtTCOtc9K9BnsyQhQJGXvw\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/4a17f15.js"
  },
  "/_nuxt/56cfdd2.js": {
    "type": "application/javascript",
    "etag": "\"100e-7VKtzzD2LT+36N+XNnKCerDMZ5c\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/56cfdd2.js"
  },
  "/_nuxt/5d3a97d.js": {
    "type": "application/javascript",
    "etag": "\"3647f-0qcpa7PluURWI0/addkJ1nEO1hs\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/5d3a97d.js"
  },
  "/_nuxt/5e49c56.js": {
    "type": "application/javascript",
    "etag": "\"5b6f-vFAi8d5B4JBVoBTNZ0pV/BbdT+8\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/5e49c56.js"
  },
  "/_nuxt/6615efb.js": {
    "type": "application/javascript",
    "etag": "\"316-moe5TCNxzV3AKJGCbk6dPfZLYd4\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/6615efb.js"
  },
  "/_nuxt/7fa53e9.js": {
    "type": "application/javascript",
    "etag": "\"9f6-HwV00Mry0HaI3jh0gP1nXkQRN3E\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/7fa53e9.js"
  },
  "/_nuxt/86ec510.js": {
    "type": "application/javascript",
    "etag": "\"4e3-KTEq3OF7OY7TE5r0mw6oAeOCYmA\"",
    "mtime": "2021-10-12T17:16:46.151Z",
    "path": "../public/_nuxt/86ec510.js"
  },
  "/_nuxt/8ce1b29.js": {
    "type": "application/javascript",
    "etag": "\"86a-LN3Bm6Dw4g/4h+y9FqE2d4ALiFA\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/8ce1b29.js"
  },
  "/_nuxt/8d6879c.js": {
    "type": "application/javascript",
    "etag": "\"1822-6fvOTBJ4IhUbeTD1x5P6AHiaqS0\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/8d6879c.js"
  },
  "/_nuxt/a8735ea.js": {
    "type": "application/javascript",
    "etag": "\"6a1-SzT/w7Ag5oMM/4xtljoals7GbkQ\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/a8735ea.js"
  },
  "/_nuxt/b48468a.js": {
    "type": "application/javascript",
    "etag": "\"1d53-LttCurWXGyDbrgx6DNFPWK22U08\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/b48468a.js"
  },
  "/_nuxt/b7d0093.js": {
    "type": "application/javascript",
    "etag": "\"2cb4-NAqqfetYgD1Gurk1o1qZdjKehvg\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/b7d0093.js"
  },
  "/_nuxt/bec724a.js": {
    "type": "application/javascript",
    "etag": "\"6d1-sJjq/vFO0dqdhnz1So0xSQ/jnMM\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/bec724a.js"
  },
  "/_nuxt/d475fc8.js": {
    "type": "application/javascript",
    "etag": "\"42f9-Y0yNxr7gyPv5OrIMCWgWHoBlkAA\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/d475fc8.js"
  },
  "/_nuxt/d768517.js": {
    "type": "application/javascript",
    "etag": "\"953-Kk9OBvkjs05DTnjm/hWrF5O6MnM\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/d768517.js"
  },
  "/datenschutz/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"ce61-+M2QYCfSdcWGWvP8u8ejhAe+Es0\"",
    "mtime": "2021-10-12T17:16:53.171Z",
    "path": "../public/datenschutz/index.html"
  },
  "/galerie/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"9f8c-YVEEjM1trV0tJ4IQWfNcZ3WfNCc\"",
    "mtime": "2021-10-12T17:16:53.691Z",
    "path": "../public/galerie/index.html"
  },
  "/grabmale/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"9519-psIoHuS1jS/QCn+5JwuAHODJzWQ\"",
    "mtime": "2021-10-12T17:16:53.463Z",
    "path": "../public/grabmale/index.html"
  },
  "/impressum/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"873c-7XYYzC87k7KCgrpTtvO815J0E8Y\"",
    "mtime": "2021-10-12T17:16:53.463Z",
    "path": "../public/impressum/index.html"
  },
  "/kontakt/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"842d-/y2q9a2pIzDFhCrdRa+PUc3rpFQ\"",
    "mtime": "2021-10-12T17:16:53.463Z",
    "path": "../public/kontakt/index.html"
  },
  "/restaurierungen/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8fa1-Nt6L332CHzNp6si4AcLrOxvmvZk\"",
    "mtime": "2021-10-12T17:16:53.463Z",
    "path": "../public/restaurierungen/index.html"
  },
  "/ueber-uns/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"8ffb-dpT2uPTtUbq17ZfioI7pe2uWrws\"",
    "mtime": "2021-10-12T17:16:53.463Z",
    "path": "../public/ueber-uns/index.html"
  },
  "/_nuxt/img/about_1.e37ec02.jpg": {
    "type": "image/jpeg",
    "etag": "\"830e-u/+aEjc/hqMyUkpHep7BCq6A8Hg\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/img/about_1.e37ec02.jpg"
  },
  "/_nuxt/img/about_2.8e2a437.jpg": {
    "type": "image/jpeg",
    "etag": "\"8318-3GxgeyuB4/nEOzahxXTccFj+dig\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/img/about_2.8e2a437.jpg"
  },
  "/_nuxt/img/banner.d466f71.webp": {
    "type": "image/webp",
    "etag": "\"10f7e-glm9uAFMdALZRz86ph6pxnpQL3Q\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/img/banner.d466f71.webp"
  },
  "/_nuxt/img/gallery_1.91aa961.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f19-LZqMCfr77S1dINaEiEzvtj5kntQ\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/img/gallery_1.91aa961.jpg"
  },
  "/_nuxt/img/gallery_2.3332734.jpg": {
    "type": "image/jpeg",
    "etag": "\"20d65-Z69x+qMUX6yTRyeHl/A+YonIioE\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/img/gallery_2.3332734.jpg"
  },
  "/_nuxt/img/gallery_3.04bf6d9.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a62c-2zMujSatXY8CQp2qipsG20PHSho\"",
    "mtime": "2021-10-12T17:16:46.147Z",
    "path": "../public/_nuxt/img/gallery_3.04bf6d9.jpg"
  },
  "/_nuxt/img/grabmallager-001.d6b1839.jpg": {
    "type": "image/jpeg",
    "etag": "\"15901-LVwT+g/+qAG+/zxV5tk2Y7qoJY8\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-001.d6b1839.jpg"
  },
  "/_nuxt/img/grabmallager-002.13f5beb.jpg": {
    "type": "image/jpeg",
    "etag": "\"3194b-NZSiUXxb3F5MzEK8NjS+TQ6t4gM\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-002.13f5beb.jpg"
  },
  "/_nuxt/img/grabmallager-003.9f3363f.jpg": {
    "type": "image/jpeg",
    "etag": "\"12507-q7nIrjUuuuzt/I0OZCIR3YINX9s\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-003.9f3363f.jpg"
  },
  "/_nuxt/img/grabmallager-004.e197516.jpg": {
    "type": "image/jpeg",
    "etag": "\"1fc13-PKTotkYrBYg/kAPFHHXoNf+uO3c\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-004.e197516.jpg"
  },
  "/_nuxt/img/grabmallager-005.595b4e3.jpg": {
    "type": "image/jpeg",
    "etag": "\"15540-Lt2aektllXTcGcSQ19uSXAfQq+g\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-005.595b4e3.jpg"
  },
  "/_nuxt/img/grabmallager-006.20e3da4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e750-sdp0fCWqCc4UnM1kt1vsEd4o0tI\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-006.20e3da4.jpg"
  },
  "/_nuxt/img/grabmallager-007.d528c8e.jpg": {
    "type": "image/jpeg",
    "etag": "\"ece8-K9m4TDXEuuqwTjQOhFdz6uLiCD4\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-007.d528c8e.jpg"
  },
  "/_nuxt/img/grabmallager-008.f1a15dc.jpg": {
    "type": "image/jpeg",
    "etag": "\"35060-GUkWgzvJM2B8oh1I+jyZPUqqc7g\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-008.f1a15dc.jpg"
  },
  "/_nuxt/img/grabmallager-009.7d04c91.jpg": {
    "type": "image/jpeg",
    "etag": "\"1910b-4fPezopj+x3oJLwKZGIJnX66Mso\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-009.7d04c91.jpg"
  },
  "/_nuxt/img/grabmallager-010.3e04859.jpg": {
    "type": "image/jpeg",
    "etag": "\"24950-/PATKAzT1B6XwFwS5RQIpTWHHN4\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-010.3e04859.jpg"
  },
  "/_nuxt/img/grabmallager-011.0c39d82.jpg": {
    "type": "image/jpeg",
    "etag": "\"13e72-cznyLuLJaPFdWgIl/VqWaVuMYV0\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-011.0c39d82.jpg"
  },
  "/_nuxt/img/grabmallager-012.e45c10d.jpg": {
    "type": "image/jpeg",
    "etag": "\"c1cf-/2OM1V/wkT8T0cTlZI+zVpRHtno\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-012.e45c10d.jpg"
  },
  "/_nuxt/img/grabmallager-013.0fb8469.jpg": {
    "type": "image/jpeg",
    "etag": "\"fdd1-THIm1zVf3+DVrbE9xPx2CeVBS20\"",
    "mtime": "2021-10-12T17:16:46.143Z",
    "path": "../public/_nuxt/img/grabmallager-013.0fb8469.jpg"
  },
  "/_nuxt/img/grabmallager-014.c42c60f.jpg": {
    "type": "image/jpeg",
    "etag": "\"c510-hSgEZ11GWZlyCDaVk9ikbkjKsB0\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-014.c42c60f.jpg"
  },
  "/_nuxt/img/grabmallager-015.e1f2938.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e744-Xwy2RXptw/sS36Sl1wa4YHMHx8k\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-015.e1f2938.jpg"
  },
  "/_nuxt/img/grabmallager-016.13c8d8a.jpg": {
    "type": "image/jpeg",
    "etag": "\"12975-Q6RZ79HZPuE0M7luXbLeqPZ1Xb0\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-016.13c8d8a.jpg"
  },
  "/_nuxt/img/grabmallager-017.278f2dd.jpg": {
    "type": "image/jpeg",
    "etag": "\"39292-KNMACnyish5FZpBvB8b3jcjvXg0\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-017.278f2dd.jpg"
  },
  "/_nuxt/img/grabmallager-018.f4cd7bb.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e3ef-sUITo9lviCPz2t3BD3tkOn+tfNY\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-018.f4cd7bb.jpg"
  },
  "/_nuxt/img/grabmallager-019.521459e.jpg": {
    "type": "image/jpeg",
    "etag": "\"227c8-/ue+nwGUvL/395cygkxpKx2SqgI\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-019.521459e.jpg"
  },
  "/_nuxt/img/grabmallager-020.98573ca.jpg": {
    "type": "image/jpeg",
    "etag": "\"19fff-YdIsT2P25lj4GOdr71tAj50CpYg\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-020.98573ca.jpg"
  },
  "/_nuxt/img/grabmallager-021.593ddfe.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e891-6ibVcTRwq+HwlLtCcCLbNULc31s\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-021.593ddfe.jpg"
  },
  "/_nuxt/img/grabmallager-022.caefea7.jpg": {
    "type": "image/jpeg",
    "etag": "\"18d8c-v725BC+WwZtAEGPeUplIvYUTa5A\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-022.caefea7.jpg"
  },
  "/_nuxt/img/grabmallager-023.df83657.jpg": {
    "type": "image/jpeg",
    "etag": "\"c164-gz06sKe4+B8Ol1tjQVfqFfr1F/w\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-023.df83657.jpg"
  },
  "/_nuxt/img/grabmallager-024.3477306.jpg": {
    "type": "image/jpeg",
    "etag": "\"1fc49-GsqvFkg7dv7+hzKB9p5HwDQLVSM\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-024.3477306.jpg"
  },
  "/_nuxt/img/grabmallager-025.676faca.jpg": {
    "type": "image/jpeg",
    "etag": "\"1638b-U8tpeHihFS4u7U/LNJOY6tCSScw\"",
    "mtime": "2021-10-12T17:16:46.139Z",
    "path": "../public/_nuxt/img/grabmallager-025.676faca.jpg"
  },
  "/_nuxt/img/grabmallager-026.36671a8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e038-OiQo3G6NwES22xKE75KRXfykfpw\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-026.36671a8.jpg"
  },
  "/_nuxt/img/grabmallager-027.9a9597c.jpg": {
    "type": "image/jpeg",
    "etag": "\"18c5b-A+H85PPa7Q65PrxpW4mvD7kol/U\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-027.9a9597c.jpg"
  },
  "/_nuxt/img/grabmallager-028.2eed563.jpg": {
    "type": "image/jpeg",
    "etag": "\"130fc-V7pUiRYsiePqJs9yGlfNfinfY+Q\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-028.2eed563.jpg"
  },
  "/_nuxt/img/grabmallager-029.650a6ed.jpg": {
    "type": "image/jpeg",
    "etag": "\"183bf-9U34MRG3lMytcjOjZoo1MWH9sAE\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-029.650a6ed.jpg"
  },
  "/_nuxt/img/grabmallager-030.3c95cfd.jpg": {
    "type": "image/jpeg",
    "etag": "\"19161-coCs1ytrVOE80kJih7zCro7bQG8\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-030.3c95cfd.jpg"
  },
  "/_nuxt/img/grabmallager-031.a380979.jpg": {
    "type": "image/jpeg",
    "etag": "\"1787e-tRk+eW+TEzWJ0b5EIgA3HaXKo4U\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-031.a380979.jpg"
  },
  "/_nuxt/img/grabmallager-032.e22b043.jpg": {
    "type": "image/jpeg",
    "etag": "\"18c01-cHiUffPdnvYwgQSGB0aHZBeZeAk\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-032.e22b043.jpg"
  },
  "/_nuxt/img/grabmallager-033.5963848.jpg": {
    "type": "image/jpeg",
    "etag": "\"1734b-ogTl9JhzP3cTJGDewd5BYGZumbA\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-033.5963848.jpg"
  },
  "/_nuxt/img/grabmallager-034.f57c4f0.jpg": {
    "type": "image/jpeg",
    "etag": "\"11634-QaJRZgLXpcmwwvk6hsDajHlcuBs\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmallager-034.f57c4f0.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-001.97cbceb.jpg": {
    "type": "image/jpeg",
    "etag": "\"23a1d-xnSwD4VQGKRlcuSuA1B2zONUD5Y\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-001.97cbceb.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-002.aa0928a.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c41d-mPoc1XnHvKGyyqXEySop/H6bQBI\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-002.aa0928a.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-003.6b35577.jpg": {
    "type": "image/jpeg",
    "etag": "\"247fb-v5YifPTH6jncXyVC7Nvh4j0Hg0A\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-003.6b35577.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-004.27eeafb.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b79d-85uR+c3rVzd40kBCjj7TYWByRM4\"",
    "mtime": "2021-10-12T17:16:46.135Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-004.27eeafb.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-005.fd5e990.jpg": {
    "type": "image/jpeg",
    "etag": "\"228ed-PbRTB3s/ioXPhTSeI7KXC+ZoHYE\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-005.fd5e990.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-006.a25dc1a.jpg": {
    "type": "image/jpeg",
    "etag": "\"20239-2fcPqLYPnKy242va0Jyi9XNMBtU\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-006.a25dc1a.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-007.bb80f10.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ed0f-0IJFf9kENEAySZnsPJ2M+s1OzA8\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-007.bb80f10.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-008.5789541.jpg": {
    "type": "image/jpeg",
    "etag": "\"23832-22km94+oEHAKDnpUFxL/sVUgkNg\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-008.5789541.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-009.c9c2ec4.jpg": {
    "type": "image/jpeg",
    "etag": "\"215ca-UYr5g/8kVEtKko++CgKJTELux9w\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-009.c9c2ec4.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-010.4cfd84b.jpg": {
    "type": "image/jpeg",
    "etag": "\"34846-eqpsSKlhldqjqxyOQlWtK2XHsik\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-010.4cfd84b.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-011.5126421.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a763-4tF15KI5NYUwf0eWiiSONAYxPdg\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-011.5126421.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-012.5158a63.jpg": {
    "type": "image/jpeg",
    "etag": "\"2396a-yT7ufl3Xtnc7F3cQ/mZ1lbyBMuI\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-012.5158a63.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-013.8238f15.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ee4f-Gx41eWjh+fMsXuF+A+6vzZTUjiQ\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-013.8238f15.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-014.6c3842e.jpg": {
    "type": "image/jpeg",
    "etag": "\"24bc0-knh+N3HHd4sUg68NamfryWciwnc\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-014.6c3842e.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-015.eab4983.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b9c8-RCmSLNVwhL+Us7yJQ9MBTGh6ZQA\"",
    "mtime": "2021-10-12T17:16:46.131Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-015.eab4983.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-016.fe86ec3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2339d-osK7WWABPvUr0y7sN4LK7mGEq5E\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-016.fe86ec3.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-017.d82426a.jpg": {
    "type": "image/jpeg",
    "etag": "\"25166-1YbWh2ZV3iyrrxLXfOsJo6yC17I\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-017.d82426a.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-018.d526e20.jpg": {
    "type": "image/jpeg",
    "etag": "\"10c8c-1T7sa/bYOIW2JqKCrr/obuAC3hA\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-018.d526e20.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-019.88cab2e.jpg": {
    "type": "image/jpeg",
    "etag": "\"3437f-t2HTirhJVZTiRn1di6uSsQ3fQYM\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-019.88cab2e.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-020.fc28ffc.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ffca-qdXjLpBjqOCpwAOfC2zzyzUGqGk\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-020.fc28ffc.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-021.5187b5e.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ee6f-+ASt/LsmXlR1wdRrFPHxu7q5F04\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-021.5187b5e.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-022.593ddfe.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e891-6ibVcTRwq+HwlLtCcCLbNULc31s\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-022.593ddfe.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-023.676faca.jpg": {
    "type": "image/jpeg",
    "etag": "\"1638b-U8tpeHihFS4u7U/LNJOY6tCSScw\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-023.676faca.jpg"
  },
  "/_nuxt/img/grabmalreferenzen-024.98573ca.jpg": {
    "type": "image/jpeg",
    "etag": "\"19fff-YdIsT2P25lj4GOdr71tAj50CpYg\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/grabmalreferenzen-024.98573ca.jpg"
  },
  "/_nuxt/img/home_1.ba67854.jpg": {
    "type": "image/jpeg",
    "etag": "\"11780-sxVqTW3zPPV1soVsEXfEOYf3cAs\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/home_1.ba67854.jpg"
  },
  "/_nuxt/img/home_2.e97d2de.jpg": {
    "type": "image/jpeg",
    "etag": "\"1384a-gllrajJ1a8ln7PLzfpw3V4/dXWI\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/home_2.e97d2de.jpg"
  },
  "/_nuxt/img/restaurierungen-001.23af6af.jpg": {
    "type": "image/jpeg",
    "etag": "\"111c7-N46iqV9FfNLbQir8gIY2nI1wVtE\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/restaurierungen-001.23af6af.jpg"
  },
  "/_nuxt/img/restaurierungen-002.614e5e9.jpg": {
    "type": "image/jpeg",
    "etag": "\"25fe0-w6fafB0LVcBtpogSY5DW/HG5604\"",
    "mtime": "2021-10-12T17:16:46.127Z",
    "path": "../public/_nuxt/img/restaurierungen-002.614e5e9.jpg"
  },
  "/_nuxt/img/restaurierungen-003.2af2567.jpg": {
    "type": "image/jpeg",
    "etag": "\"21f28-j/Eed9BPpNhPuJKN8Q8GaT0Blcg\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restaurierungen-003.2af2567.jpg"
  },
  "/_nuxt/img/restaurierungen-004.b2a718b.jpg": {
    "type": "image/jpeg",
    "etag": "\"14d75-SbKuHE55jphTBvhfJhYCi2dXhow\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restaurierungen-004.b2a718b.jpg"
  },
  "/_nuxt/img/restaurierungen-005.2052c2b.jpg": {
    "type": "image/jpeg",
    "etag": "\"16594-/vvHW6o71/si+UF/L1c3Ft6TUYM\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restaurierungen-005.2052c2b.jpg"
  },
  "/_nuxt/img/restaurierungen-006.ea0d3d8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d23a-LviXeI89qLA/+7Gwh5bPN1XxGyE\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restaurierungen-006.ea0d3d8.jpg"
  },
  "/_nuxt/img/restaurierungen-007.3d1ad4f.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b432-Io6k8q7G2lYN27DWdWThDqaS2uo\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restaurierungen-007.3d1ad4f.jpg"
  },
  "/_nuxt/img/restorations_1.d73aafb.jpg": {
    "type": "image/jpeg",
    "etag": "\"13a19-KhrubZskwTqIlebAe5mPJNAa17o\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restorations_1.d73aafb.jpg"
  },
  "/_nuxt/img/restorations_2.ce11aa7.jpg": {
    "type": "image/jpeg",
    "etag": "\"baf5-oAx7xOSCe0Bgqv6jvreRxHSx7w8\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restorations_2.ce11aa7.jpg"
  },
  "/_nuxt/img/restorations_3.50d1bec.jpg": {
    "type": "image/jpeg",
    "etag": "\"18960-jYWDiGK2q7PzeRs6xqd8HRgz418\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/restorations_3.50d1bec.jpg"
  },
  "/_nuxt/img/tombs_1.b9517c9.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ad9-CMRQz+sqGium/30QZx2tGuAbJQU\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/tombs_1.b9517c9.jpg"
  },
  "/_nuxt/img/tombs_2.34b6ac1.jpg": {
    "type": "image/jpeg",
    "etag": "\"22f76-qCPdfAU+HHcDiaXIEXxkN6fK1N8\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/tombs_2.34b6ac1.jpg"
  },
  "/_nuxt/img/tombs_3.c865cb7.jpg": {
    "type": "image/jpeg",
    "etag": "\"108f9-AEKU2AuMQQ48ElOOhbuflGikXv4\"",
    "mtime": "2021-10-12T17:16:46.123Z",
    "path": "../public/_nuxt/img/tombs_3.c865cb7.jpg"
  },
  "/galerie/grabmallager/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"b912-OZd3NAv6h63/6YdxvyG7U3ftFik\"",
    "mtime": "2021-10-12T17:16:53.647Z",
    "path": "../public/galerie/grabmallager/index.html"
  },
  "/galerie/grabmalreferenzen/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"b273-Ezkvj3e08Q7W+jQvqcMOdXjnXFA\"",
    "mtime": "2021-10-12T17:16:53.647Z",
    "path": "../public/galerie/grabmalreferenzen/index.html"
  },
  "/galerie/restaurierungen/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a4c9-HLANq5RRbix7Tw+sxEdUOhZCWNM\"",
    "mtime": "2021-10-12T17:16:53.647Z",
    "path": "../public/galerie/restaurierungen/index.html"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/static" + "/" + "1634059006";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
