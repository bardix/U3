console.log('Hello Typescript!');

let variable= 'Stefano';
let variabile2= 50;
let variabile3= true;

//inizializziamo una variabile e gli diciamo che sarà una stinga, la variabile non può cambiare il tipo

let x:string = "Epicode";

let boh // dovendole dare un tipo, TS gli da 'Any'

// funzioni

const sum = function (n1: number, n2: number){
    return n1 + n2 
}

console.log (sum(1,2) +100)  // questo darà 103

//creazione di un array

const Array1: Array<number> = [1,2,3] //prima dichiariamo il nome dell'array poi gli diciamo che stiamo facendo un array di numeri

// si possono unire i tipi grazie al PIPE |

type customtype = string | number //unione 

const bah: customtype = 50 // qua praticamente dichiariamo la variabile e gli diciamo che potrebbe essere o un numero o una stringa e alla fine gli diamo un numero

//OGGETTI

let persona: humanbeing ={
    nome: 'gianni',
    cognome: 'morandi',
    skills: ['booh','cantare']
}

//adesso facciamo un interfaccia per fare piu' oggetti uguali

interface humanbeing{
    nome: string
    cognome: string
    skills?: string[] //il punto di domanda ti dice che il parametro è opzionale, vuol dire che alcuni oggetti potrebbero non averlo
}

const persona2: humanbeing={
    nome: 'andre',
    cognome: 'agassi',
    skills: ['tennis']
}

