
// Empieza en 0
const board = new Array(100).fill(0)


let Numeroaleatoriohasta50 = Math.floor(Math.random() * 50)

const divNumeroaleatoriohasta50 = document.getElementById('Numeroaleatoriohasta50');


// Generar cuando se aprieta botton 'Generate'
function GenerarNumero() {
    Numeroaleatoriohasta50 = Math.floor(Math.random() * 50);
    Numeroaleatoriohasta50;
    console.log(Numeroaleatoriohasta50);
    divNumeroaleatoriohasta50.innerText = 'Numeros:' + Numeroaleatoriohasta50;
    
}






// Generar cuando se aprieta botton 'Reset'
function Reset() {
    for (let i = 0; i < 100; i++) {
        board[i] = 0
    }
    console.log(board)
}

// const maximo = 5 Nunca cambbia
// let contador = 0 Cambia