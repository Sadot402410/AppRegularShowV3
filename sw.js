self.addEventListener('install', e => {

    const recursos = caches.open('BovedaRecursos').then(cache => {
        cache.add('/'), //buena practica
            cache.add('index.html'),
            cache.add('js/app.js'),
            cache.add('css/styles.css'),
            cache.add('css/styles2.css'),
            cache.add('pages/interfaz2.html'),            
            cache.add('manifest.json')
    })

    const imagenes = caches.open('BovedaImagenes').then(cache => {
        cache.add('/'), //buena practica
            cache.add('images/default.png'),
            cache.add('images/fondo.png'),
            cache.add('images/imgRegularShow.png'),            
            cache.add('images/logoRegularShow.png'),  
            cache.add('images/iconoRS.png'),            
            cache.add('images/mordecai.png'),
            cache.add('images/rigby.png'),
            cache.add('images/benson.png'),
            cache.add('images/musculoso.png'),
            cache.add('images/fantasmano.png'),
            cache.add('images/skips.png'),
            cache.add('images/papaleta.png'),
            cache.add('images/thomas.png'),
            cache.add('images/margarita.png'),
            cache.add('images/eileen.png'),
            cache.add('images/starla.png');
    })
    e.waitUntil(recursos, imagenes);
});

self.addEventListener('fetch', e => {
    const resp = fetch(e.request).then(newResp => { 
        caches.open('BovedaImagenes').then(cache => {
            cache.put(e.request, newResp)
        });
        return newResp.clone();
    }).catch(err => {
        return caches.match(e.request);
    })
    e.respondWith(resp)
});

