
// Empieza en 0
const board = new Array(100).fill(0)


let Numeroaleatoriohasta50 = Math.floor(Math.random() * 50)

let reset = 0

const divNumeroaleatoriohasta50 = document.getElementById('Numeroaleatoriohasta50');
const divreset = document.getElementById('EliminarNumero');

// Generar cuando se aprieta botton 'Generate'
function GenerarNumero() {
    Numeroaleatoriohasta50 = Math.floor(Math.random() * 50);
    Numeroaleatoriohasta50;
    console.log(Numeroaleatoriohasta50);
    divNumeroaleatoriohasta50.innerText = 'Numeros:' + Numeroaleatoriohasta50;
    
}
// Generar cuando se aprieta botton 'Reset'
function Reset() {
    reset = 0;
    console.log(reset);
    divNumeroaleatoriohasta50.innerText = 'Numeros: ' + reset;
}

function GuardarJugadores(){
    
}




// const maximo = 5 Nunca cambbia
// let contador = 0 Cambia