"use strict";
console.log('Hello Typescript!');
let variable = 'Stefano';
let variabile2 = 50;
let variabile3 = true;
//inizializziamo una variabile e gli diciamo che sarà una stinga, la variabile non può cambiare il tipo
let x = "Epicode";
let boh; // dovendole dare un tipo, TS gli da 'Any'
// funzioni
const sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(1, 2) + 100); // questo darà 103
//creazione di un array
const Array1 = [1, 2, 3]; //prima dichiariamo il nome dell'array poi gli diciamo che stiamo facendo un array di numeri
const bah = 50; // qua praticamente dichiariamo la variabile e gli diciamo che potrebbe essere o un numero o una stringa e alla fine gli diamo un numero
//OGGETTI
let persona = {
    nome: 'gianni',
    cognome: 'morandi',
    skills: ['booh', 'cantare']
};
const persona2 = {
    nome: 'andre',
    cognome: 'agassi',
    skills: ['tennis']
};
