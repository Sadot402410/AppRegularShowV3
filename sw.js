self.addEventListener('install', e => {

    const recursos = caches.open('BovedaRecursos').then(cache => {
        cache.add('/'), //buena practica
            cache.add('index.html'),
            cache.add('js/app.js'),
            cache.add('js/scriptInterfaz2.js'),
            cache.add('js/scriptInterfaz3.js'),
            cache.add('css/styles.css'),
            cache.add('css/styles2.css'),
            cache.add('css/styles3.css'),
            cache.add('pages/interfaz2.html'),            
            cache.add('pages/Interfaz3.html'),            
            cache.add('manifest.json')
    })

    const imagenes = caches.open('BovedaImagenes').then(cache => {
        cache.add('/'), //buena practica
            cache.add('images/default.png'),
            cache.add('images/fondo.png'),
            cache.add('images/imgRegularShow.png'),            
            cache.add('images/logoRegularShow.png'),  
            cache.add('images/iconoRS.png'),            
            cache.add('images/Mordecai.png'),
            cache.add('images/Rigby.png'),
            cache.add('images/Benson.png'),
            cache.add('images/Musculoso.png'),
            cache.add('images/Fantasmano.png'),
            cache.add('images/Skips.png'),
            cache.add('images/Papaleta.png'),
            cache.add('images/Thomas.png'),
            cache.add('images/Margarita.png'),
            cache.add('images/Eileen.png'),
            cache.add('images/Starla.png'),
            cache.add('images/Mordecai/Base.png'),
            cache.add('images/Mordecai/Musculoso.png'),
            cache.add('images/Mordecai/niño.png'),
            cache.add('images/Mordecai/Peinado.png'),
            cache.add('images/Mordecai/Rockero.png'),
            cache.add('images/Mordecai/Rubio.png'),
            cache.add('images/Rigby/Base.png'),
            cache.add('images/Rigby/Adolescente.png'),
            cache.add('images/Rigby/Ladron.png'),
            cache.add('images/Rigby/Mortal.png'),
            cache.add('images/Rigby/Musculoso.png'),
            cache.add('images/Rigby/Ochentero.png'),
            cache.add('images/Benson/Base.png'),
            cache.add('images/Benson/Baterista.png'),
            cache.add('images/Benson/Bullicio.png'),
            cache.add('images/Benson/Enojado.png'),
            cache.add('images/Benson/Formal.png'),
            cache.add('images/Benson/Soldado.png'),
            cache.add('images/Musculoso/Base.png'),
            cache.add('images/Musculoso/Fiestero.png'),
            cache.add('images/Musculoso/Karateca.png'),
            cache.add('images/Musculoso/Profesor.png'),
            cache.add('images/Musculoso/Soldado.png'),
            cache.add('images/Fantasmano/Base.png'),
            cache.add('images/Fantasmano/DJ.png'),
            cache.add('images/Fantasmano/Relajado.png'),
            cache.add('images/Skips/Base.png'),
            cache.add('images/Skips/Bolos.png'),
            cache.add('images/Skips/Elegante.png'),
            cache.add('images/Skips/Mecanico.png'),
            cache.add('images/Skips/Viejo.png'),
            cache.add('images/Papaleta/Base.png'),
            cache.add('images/Papaleta/Callejero.png'),
            cache.add('images/Papaleta/Cyborg.png'),
            cache.add('images/Papaleta/Futuro.png'),
            cache.add('images/Papaleta/Niño.png'),
            cache.add('images/Thomas/Base.png'),
            cache.add('images/Thomas/Pizza.png'),
            cache.add('images/Margarita/Base.png'),
            cache.add('images/Margarita/Banda.png'),
            cache.add('images/Margarita/Fiesta.png'),
            cache.add('images/Margarita/Guardiana.png'),
            cache.add('images/Margarita/Invierno.png'),
            cache.add('images/Margarita/Vestido.png'),
            cache.add('images/Eileen/Base.png'),
            cache.add('images/Eileen/Campo.png'),
            cache.add('images/Eileen/Entrenadora.png'),
            cache.add('images/Eileen/Estudiante.png'),
            cache.add('images/Eileen/Soldado.png'),
            cache.add('images/Eileen/Vestido.png'),
            cache.add('images/Starla/Base.png'),
            cache.add('images/Starla/Elegante.png'),
            cache.add('images/Starla/Vestido.png')
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

