function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

const personajes = obtenerParametro('Personaje');
const Traje = obtenerParametro('Traje');
let Name = document.getElementById("Name");
let imgpersonaje = document.getElementById("imgpersonaje");
let Desc = document.getElementById("Desc");
let Nombres = {
    "Mordecai": "Mordecai",
    "Rigby" : "Rigby",
    "Benson" : "Benson",
    "Musculoso" : "Musculoso",
    "Fantasmano" : "Fantasmano",
    "Skips" : "Skips",
    "Papaleta" : "Papaleta",
    "Thomas" : "Thomas",
    "Margarita" : "Margarita",
    "Eileen" : "Eileen",
    "Starla": "Starla"
};

let Descripcion = {
    "Mordecai": `"Mordecai es uno de los protagonistas principales de la serie Un Show Más, junto con su mejor amigo Ribgy, un mapache de 23 años de edad, son trabajadores del parque. Mordecai es un arrendajo azul (denominado comúnmente como azulejo). Hizo su primera aparición en el corto no oficial llamado 2 in the AM PM participando como un cajero humano, que luego se transforma en el personaje a causa del resultado de un prototipo de riñonera, un caramelo con ácido o una droga. "`,
    "Rigby" : `"Rigby (cuyo nombre real era Rigbone, aunque cuando cambió su nombre en Barco Basurero quedó como Rigby) es uno de los personajes principales de la serie Un Show Más. Es un mapache de unos 28 años que trabaja como Jardinero del Parque con su mejor amigo,Mordecai. Se le conoce por ser un mapache flojo, irresponsable e inmaduro."`,
    "Benson" : `"Benson Dunwoody es uno de los personajes principales de la serie Un Show Más. Hizo su debut en Piloto (Estados Unidos) y El Poder (Latinoamérica). Es una máquina de chicles humanoide, así como el gerente del Parque. Él es el jefe de todos los trabajadores del parque. Es muy alocado, arrogante y engreído, y tiene un carácter muy fuerte, tiene la tendencia de regañar a Mordecai y a Rigby cuando no están trabajando y cuando están flojeando."`,
    "Musculoso" : `"Mitch Musculoso Sorrenstein es uno de los personajes Principales de la serie Un Show Más. Él es uno de los Jardineros del Parque. Él es un ogro verde, gordo y/o humanoide desfigurado, que a menudo es visto con su mejor amigo Fantasmín."`,
    "Fantasmano" : `"Fantasmín o Fantasmano es uno de los personajes principales de Un Show Más. Es un fantasma que trabaja junto a su mejor amigo Musculoso como jardinero en el Parque. Casi siempre, su amigo Musculoso le dice Fantasmano. Como amigo de Musculoso, le encanta hacerle bromas a Mordecai y Rigby, pero no se lo toma tan en serio."`,
    "Skips" : `"Skips Quippenger es uno de los protagonistas de la serie Un Show Más. Skips es un yeti inmortal y el empleado más dedicado del Parque. Mantiene todo funcionando a la perfección. Como ha vivido ahí por siglos y siglos conoce el parque como la palma de su mano. También sabe las cosas que le pasan a Mordecai y a Rigby."`,
    "Papaleta" : `"Mega-Kranus llamado Papaleta Maellard es un multimillonario que fue encerrado y protegido toda o la mayor parte de su infancia, razón por la cual toma la actitud de un niño deleitándose con todo lo que ve y hace."`,
    "Thomas" : `"Nikolai (ampliamente conocido como Thomas ) es un personaje recurrente importante en Regular Show . En su debut en el estreno de la temporada 4 ,Exit 9B ,lo contratan como pasante para el parque y rápidamente se convierte en parte del elenco principal de personajes para las próximas dos temporadas."`,
    "Margarita" : `"Margarita Smith es una cardenal rojo, que trabajaba como una mesera en la Cafetería, al otro lado del parque, donde trabajan Mordecai y Rigby. Ella es uno de los pocos personajes Animales en la serie que usa ropa. Mordecai se sentía atraído por ella, y siempre estaba buscando excusas para ir a la Cafetería a verla."`,
    "Eileen" : `"Eileen es una fusión de topo-humana de 23 años de edad. Ella trabaja como mesera en el mismo lugar que anteriormente trabajaba Margarita, la cual es su mejor amiga."`,
    "Starla": `"Starla Gutsmandottir es una mujer musculosa, obesa y verde como Musculoso que hizo su debut en el episodio Mujer Musculosa, ella trabaja en la joyería Icy & Hot. En la actualidad esta con Musculoso, él le expresó sus verdaderos sentimientos hacia ella y se casaron años después desde que salieron otra vez."`
};

Name.innerText = Nombres[personajes];
imgpersonaje.src = `../images/${personajes}/${Traje}.png`;
Desc.innerText = Descripcion[personajes];

