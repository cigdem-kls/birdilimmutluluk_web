'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c74ed4ad0d143d1f0b8183a2a6d854bd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/cappuccino-cupcake_100x100.jpg": "0a852b8abf02efef72dd75632c11b700",
"assets/images/cappuccinocupcake.jpg": "e5fd1c55266d095c535994770ada0fa3",
"assets/images/cikolatali-catlak-kurabiye.jpg": "3bebf8d5ac8b5b59b9a9d5b604c3f2fe",
"assets/images/cikolatali-catlak-kurabiye_100x100.jpg": "ea1536535bf09fda9040a1cd921d02e3",
"assets/images/donut.jpg": "7f537df082b14d8d3a18b5baebe5cee9",
"assets/images/donut_200x200.jpg": "887811fd0a0d5da652a0d80d420f297e",
"assets/images/gercek-browni-tarifi.jpg": "da9fd2e480a6ab1edfbc6327baef975b",
"assets/images/gercek-browni-tarifi_100x100.jpg": "f4c0740eb193dfed6c7f835df7b3d6ad",
"assets/images/kadife-kek.jpg": "225c6069ba637afd4d6c70b2c524852d",
"assets/images/kirmizi_kadife_kek_100x100.jpg": "c20f40926c768bdbdf1fae125d9b31bf",
"assets/images/KREM-PEYN%25C4%25B0RL%25C4%25B0-HAVU%25C3%2587LU-KEK.jpg": "f34c24eb6df706ee9f39b97dd796546b",
"assets/images/KREM-PEYN%25C4%25B0RL%25C4%25B0-HAVU%25C3%2587LU-KEK_100x100.jpg": "e2a9a6e98f0faea027dc27d5d27b4610",
"assets/images/limonlu-cheesecake-tarifi.jpg": "114405daf6c21d299a6539dc09fa2b57",
"assets/images/limonlu-cheesecake-tarifi_100x100.jpg": "3d16f97e4492faa0056c0343b9689d3c",
"assets/images/login.jpg": "07ecc6c0380c8ba15e0cb39c1b2666af",
"assets/images/logo2.png": "b2b5938346020e8218eb2b702ebe44c6",
"assets/images/macaron.jpg": "64e839439d0fcbb70082969900ce4e69",
"assets/images/macaron_100x100.jpg": "36c6764f75b3dd23f34b7789e24acc6b",
"assets/images/mangolu-puding.jpg": "9b8100bb6219382e0ec712cf3c74580b",
"assets/images/mangolu-puding_100x100.jpg": "589ffdfc6c42d47d12e8a403210b3faa",
"assets/images/Meyveli-%2520rulo-kek_100x100.jpg": "dadf8eaa32e6cde300a2a21ee9473880",
"assets/images/Meyveli-Rulo-Pasta-Tarifi.jpg": "09b2e3530c513bfa231ecfc48d21ff48",
"assets/images/Oreolu-dondurma.jpg": "24d808393fd8df8693b4c16babe54a24",
"assets/images/Oreolu-dondurma_100x100.jpg": "382640af917b7fbfa663ad251cf490d5",
"assets/images/ORIJINAL-CHEESECAKE-TAR%25C4%25B0F%25C4%25B0.jpg": "d16d181feb2fdfebb9103d6f4b18eb99",
"assets/images/ORIJINAL-CHEESECAKE-TAR%25C4%25B0F%25C4%25B0_100x100.jpg": "74184c24c2264d7a2fc02fcc88ed0791",
"assets/images/pancake-tarifi.jpg": "6e6ea8632e86dd90e2b1bc360c44d37d",
"assets/images/pancake-tarifi_100x100.jpg": "4641c1a1cfc7638d45c848732a9f9048",
"assets/images/tarcin-sekerli-snickerdoodle-kurabiyesi.jpg": "643f2df57150873608c99cd9421dc4f2",
"assets/images/tarcin-sekerli-snickerdoodle-kurabiyesi_100x100.jpg": "c957d77a364d656e758ac127b504c5dd",
"assets/NOTICES": "bd03eb18c8e0ac9316b2f967ee76901f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d9ef30f77fc4d35b2e949c1e21972526",
"/": "d9ef30f77fc4d35b2e949c1e21972526",
"main.dart.js": "4ece63af07bc4357a7342185f3500807",
"manifest.json": "32409afda986d05913f0c93a1620a68c",
"version.json": "33c704ec55d25ef7330f7b62e52e0396"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
