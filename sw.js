const CACHE='za-money-tracker-v7';
const CORE=['./','./index.html','./manifest.webmanifest','./za-money-tracker-logo.jpg','./za-icon-192.png','./za-icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('za-money-tracker-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);if(url.origin!==location.origin)return;
 if(req.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/')){
  event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{caches.open(CACHE).then(c=>c.put('./index.html',res.clone()));return res;}).catch(()=>caches.match('./index.html')));return;
 }
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok)caches.open(CACHE).then(c=>c.put(req,res.clone()));return res;})));
});
