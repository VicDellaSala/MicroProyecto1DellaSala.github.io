
// Empieza en 0
const board = new Array(100).fill(0)

numeroaleatorio = Math.floor(Math.random() * 100)

// Generar cuando se aprieta botton 'Generate'
function GenerarNumero() {
    numeroaleatorio = Math.floor(Math.random() * 100)
    console.log(numeroaleatorio)
    alert('El numero es ' + numeroaleatorio)
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