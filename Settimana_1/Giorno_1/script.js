"use strict";
// Implementazione della classe User che implementa l'interfaccia Smartphone
class User1 {
    constructor(nome, cognome) {
        this.costoChiamata = 0.20;
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    ricarica(importo) {
        this.credito += importo;
    }
    chiamata(minuti) {
        const costoTotale = minuti * this.costoChiamata;
        if (this.credito >= costoTotale) {
            this.credito -= costoTotale;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// Esempio di utilizzo della classe User
const utente = new User1("Mario", "Rossi");
// Ricarica di 5 euro
utente.ricarica(5);
console.log(`Credito dopo la ricarica: €${utente.chiama404()}`);
// Effettua una chiamata di 10 minuti
utente.chiamata(10);
console.log(`Credito dopo la chiamata di 10 minuti: €${utente.chiama404()}`);
console.log(`Minuti totali di chiamata: ${utente.getNumeroChiamata()}`);
// Prova a effettuare una chiamata di 30 minuti (dovrebbe fallire)
utente.chiamata(30);
console.log(`Credito dopo il tentativo di chiamata di 30 minuti: €${utente.chiama404()}`);
console.log(`Minuti totali di chiamata: ${utente.getNumeroChiamata()}`);
// Azzera i minuti di chiamata
utente.azzeraChiamate();
console.log(`Minuti totali di chiamata dopo l'azzeramento: ${utente.getNumeroChiamata()}`);
