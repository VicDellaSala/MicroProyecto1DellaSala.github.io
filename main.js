
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
    let input = document.getElementById('input');
    let value = input.value;
    console.log(value);
    input.value = '';
    let div = document.getElementById('jugadores');
    div.innerHTML += `<p>${value}</p>`;
    let p = document.createElement('p');
    p.innerText = value;
    div.appendChild(p
    );  
}


function TamañoCarton3x3(){
    let carton = new Array(9).fill(0);
    console.log(carton);
    let div = document.getElementById('carton3x3');
    div.innerHTML = '';
    for (let i = 0; i < carton.length; i++) {
        div.innerHTML += `<div>${carton[i]}</div>`;
    }
}

function TamañoCarton4x4(){
    let carton = new Array(16).fill(0);
    console.log(carton);
    let div = document.getElementById('carton4x4');
    div.innerHTML = '';
    for (let i = 0; i < carton.length; i++) {
        div.innerHTML += `<div>${carton[i]}</div>`;
    }
}

function TamañoCarton5x5(){
    let carton = new Array(25).fill(0);
    console.log(carton);
    let div = document.getElementById('carton5x5');
    div.innerHTML = '';
    for (let i = 0; i < carton.length; i++) {
        div.innerHTML += `<div>${carton[i]}</div>`;
    }
}



// const maximo = 5 Nunca cambbia
// let contador = 0 Cambia