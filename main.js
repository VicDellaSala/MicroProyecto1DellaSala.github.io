
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

const divTurno25 = document.getElementById('Turno25');

function Turno() {
    let Turno25 = 25;
    let Turno25_m1 = Turno25 - 1;
    let Turno25_m2 = Turno25 - 2;
    console.log(Turno25);
    divTurno25.innerText = 'Turno: ' + Turno25_m1;
    divTurno25.innerText = 'Turno: ' + Turno25_m2;
}




// Matrices para los cartones
let matrix_3x3 = [
    [],
    [],
    [],
]

function TamañoCarton3x3_1(){
    let div = document.getElementById('carton3x3_1');
    div.innerHTML = '';
        let matrix_3x3 = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_3x3.push(row);
        }
        console.log(matrix_3x3);
        for (let i = 0; i < matrix_3x3.length; i++) {
            for (let j = 0; j < matrix_3x3[i].length; j++) {
                div.innerHTML += `<div>${matrix_3x3[i][j]}</div>`;
            }
        }
}  

function TamañoCarton3x3_2(){
    let div = document.getElementById('carton3x3_2');
    div.innerHTML = '';
        let matrix_3x3 = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_3x3.push(row);
        }
        console.log(matrix_3x3);
        for (let i = 0; i < matrix_3x3.length; i++) {
            for (let j = 0; j < matrix_3x3[i].length; j++) {
                div.innerHTML += `<div>${matrix_3x3[i][j]}</div>`;
            }
        }
}  

function TamañoCarton3x3_3(){
    let div = document.getElementById('carton3x3_3');
    div.innerHTML = '';
        let matrix_3x3 = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_3x3.push(row);
        }
        console.log(matrix_3x3);
        for (let i = 0; i < matrix_3x3.length; i++) {
            for (let j = 0; j < matrix_3x3[i].length; j++) {
                div.innerHTML += `<div>${matrix_3x3[i][j]}</div>`;
            }
        }
}  

function TamañoCarton3x3_4(){
    let div = document.getElementById('carton3x3_4');
    div.innerHTML = '';
        let matrix_3x3 = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_3x3.push(row);
        }
        console.log(matrix_3x3);
        for (let i = 0; i < matrix_3x3.length; i++) {
            for (let j = 0; j < matrix_3x3[i].length; j++) {
                div.innerHTML += `<div>${matrix_3x3[i][j]}</div>`;
            }
        }
}  

let matrix_4x4 = [
    [],
    [],
    [],
    [],
]

function TamañoCarton4x4_1(){
    let div = document.getElementById('carton4x4_1');
    div.innerHTML = '';
        let matrix_4x4 = [];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 4; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_4x4.push(row);
        }
        console.log(matrix_4x4);
        for (let i = 0; i < matrix_4x4.length; i++) {
            for (let j = 0; j < matrix_4x4[i].length; j++) {
                div.innerHTML += `<div>${matrix_4x4[i][j]}</div>`;
            }
        }
}  

function TamañoCarton4x4_2(){
    let div = document.getElementById('carton4x4_2');
    div.innerHTML = '';
        let matrix_4x4 = [];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 4; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_4x4.push(row);
        }
        console.log(matrix_4x4);
        for (let i = 0; i < matrix_4x4.length; i++) {
            for (let j = 0; j < matrix_4x4[i].length; j++) {
                div.innerHTML += `<div>${matrix_4x4[i][j]}</div>`;
            }
        }
} 

function TamañoCarton4x4_3(){
    let div = document.getElementById('carton4x4_3');
    div.innerHTML = '';
        let matrix_4x4 = [];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 4; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_4x4.push(row);
        }
        console.log(matrix_4x4);
        for (let i = 0; i < matrix_4x4.length; i++) {
            for (let j = 0; j < matrix_4x4[i].length; j++) {
                div.innerHTML += `<div>${matrix_4x4[i][j]}</div>`;
            }
        }
} 

function TamañoCarton4x4_4(){
    let div = document.getElementById('carton4x4_4');
    div.innerHTML = '';
        let matrix_4x4 = [];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 4; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_4x4.push(row);
        }
        console.log(matrix_4x4);
        for (let i = 0; i < matrix_4x4.length; i++) {
            for (let j = 0; j < matrix_4x4[i].length; j++) {
                div.innerHTML += `<div>${matrix_4x4[i][j]}</div>`;
            }
        }
} 

let matrix_5x5 = [
    [],
    [],
    [],
    [],
    [],
]

function TamañoCarton5x5_1(){
    let div = document.getElementById('carton5x5_1');
    div.innerHTML = '';
        let matrix_5x5 = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_5x5.push(row);
        }
        console.log(matrix_5x5);
        for (let i = 0; i < matrix_5x5.length; i++) {
            for (let j = 0; j < matrix_5x5[i].length; j++) {
                div.innerHTML += `<div>${matrix_5x5[i][j]}</div>`;
            }
        }
}  

function TamañoCarton5x5_2(){
    let div = document.getElementById('carton5x5_2');
    div.innerHTML = '';
        let matrix_5x5 = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_5x5.push(row);
        }
        console.log(matrix_5x5);
        for (let i = 0; i < matrix_5x5.length; i++) {
            for (let j = 0; j < matrix_5x5[i].length; j++) {
                div.innerHTML += `<div>${matrix_5x5[i][j]}</div>`;
            }
        }
} 

function TamañoCarton5x5_3(){
    let div = document.getElementById('carton5x5_3');
    div.innerHTML = '';
        let matrix_5x5 = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_5x5.push(row);
        }
        console.log(matrix_5x5);
        for (let i = 0; i < matrix_5x5.length; i++) {
            for (let j = 0; j < matrix_5x5[i].length; j++) {
                div.innerHTML += `<div>${matrix_5x5[i][j]}</div>`;
            }
        }
} 

function TamañoCarton5x5_4(){
    let div = document.getElementById('carton5x5_4');
    div.innerHTML = '';
        let matrix_5x5 = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                let randomNumber = Math.floor(Math.random() * 50);
                row.push(randomNumber);
            }
            matrix_5x5.push(row);
        }
        console.log(matrix_5x5);
        for (let i = 0; i < matrix_5x5.length; i++) {
            for (let j = 0; j < matrix_5x5[i].length; j++) {
                div.innerHTML += `<div>${matrix_5x5[i][j]}</div>`;
            }
        }
} 

// const maximo = 5 Nunca cambbia
// let contador = 0 Cambia