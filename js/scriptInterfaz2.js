const personajes = document.getElementById('personajes');
const imgpersonaje = document.getElementById('imgpersonaje');
const nompersonaje = document.getElementById('namepersonaje');
let none = document.getElementById("Display");
let Traje = document.getElementById("Traje");
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

let Trajes = {
    "Mordecai" : "Base/Musculoso/niño/Peinado/Rockero/Rubio",
    "Rigby" : "Base/Adolescente/Ladron/Mortal/Musculoso/Ochentero",
    "Benson" : "Base/Baterista/Bullicio/Enojado/Formal/Soldado",
    "Musculoso" : "Base/Fiestero/Karateca/Profesor/Soldado",
    "Fantasmano": "Base/DJ/Relajado" ,
    "Skips": "Base/Bolos/Elegnate/Mecanico/Viejo",
    "Papaleta" : "Base/Callejero/Cyborg/Futuro",
    "Thomas" : "Base/Pizza",
    "Margarita" : "Base/Banda/Fiesta/Guardiana/Invierno/Vestido",
    "Eileen" : "Base/Campo/Entrenadora/Estudiante/Soldado/Vestido",
    "Starla" : "Base/Elegante/Vestido"
};

Traje.addEventListener("change", () => {
    imgpersonaje.src = `../images/default.png`;
    nompersonaje.innerText = `${Nombres[personajes.value]}`;
    if (Traje.value != ""){
        imgpersonaje.src = `../images/${personajes.value}/${Traje.value}.png`;
        nompersonaje.innerText = `${Nombres[personajes.value]} ${Traje.value}`;
        if(Nombres[personajes.value] == undefined){
            imgpersonaje.src = `../images/default.png`;
            nompersonaje.innerText = "Personaje no Encontrado";
        }
    }
    else{
    }
})

personajes.value = "default";
imgpersonaje.src = `../images/default.png`;
imgpersonaje.style.height = "130px";

personajes.addEventListener("change", () => {
    const selectedOption = personajes.value;

    if (selectedOption === "default") {
        imgpersonaje.src = `../images/default.png`;
        nompersonaje.textContent = "Nombre del personaje";
        imgpersonaje.style.height = "130px";
    } else {
        imgpersonaje.src = `../images/default.png`;
        nompersonaje.innerText = Nombres[selectedOption];

        if (selectedOption !== "") {
            let ArrayTrajes = Trajes[selectedOption];
            ArrayTrajes = ArrayTrajes.split("/");
            let aux = "";
            for (const e of ArrayTrajes) {
                aux += `<option value="${e}">${e}</option>`;
            }
            Traje.innerHTML = aux;
            Traje.value = "";
            imgpersonaje.style.height = "130px";
        } else {
            imgpersonaje.style.height = "130px";
        }
    }
});

imgpersonaje.addEventListener("click", () => {
    imgpersonaje.style.cursor = "pointer";
    if (personajes.value != "" && Traje.value != ""){
        location.href = `../pages/Interfaz3.html?Personaje=${personajes.value}&Traje=${Traje.value}`;
    }
    else{
        console.log('No se puede viajar a una ubicacion si no se ha seleccionado personaje y traje');
    }
})

