// Description: Main file for the game

// Empieza en 0
const board = new Array(100).fill(0)

// Generar cuando se aprieta botton 'Generate'
function Generate() {
    for (let i = 0; i < 10; i++) {
        let ran = Math.floor(Math.random() * 100)
        board[ran] = 1
    }
    console.log(board)
}

// Generar cuando se aprieta botton 'Reset'
function Reset() {
    for (let i = 0; i < 100; i++) {
        board[i] = 0
    }
    console.log(board)
}

