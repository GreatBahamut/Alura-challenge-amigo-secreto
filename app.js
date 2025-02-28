'use strict'
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const lista = document.getElementById('listaAmigos')
const resultados = document.getElementById('resultado')
const botonAnadir = document.querySelector('.button-add')
const botonSortear = document.querySelector('.button-draw')
const intentoAmigo = document.querySelector('.input-name')

function agregarAmigo() {
    let amigo = intentoAmigo.value
    if (amigo == undefined
    || amigo == null 
    || amigo === 'null' 
    || amigo.length < 2
    || amigo.length > 11
    || amigo == ''
    || amigo.toLowerCase() == 'caliburnus' 
    ){
        intentoAmigo.value =''
        alert(`Amigo inválido.`) 
        alert('Por favor inserte otro nombre de amigo.')
    }
    else {
        intentoAmigo.value = ''
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo;
        lista.appendChild(nuevoAmigo)
    }
}


function sortearAmigo() {
    const amigos = document.querySelectorAll('#listaAmigos li');
    
    if (amigos.length <= 1) {
        alert('Añada amigos a lista por favor.');
        return;
    }
    const numeroAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoAleatorio = amigos[numeroAleatorio].textContent;
    resultados.textContent = `Tu amix secreto es: ${amigoAleatorio}!!!!🎉`;
}