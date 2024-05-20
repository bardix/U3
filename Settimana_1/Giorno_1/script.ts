// Definizione dell'interfaccia Smartphone
interface Smartphone {
    credito: number;
    numeroChiamate: number;
  }
  
  // Implementazione della classe User che implementa l'interfaccia Smartphone
  class User1 implements Smartphone {
    credito: number;
    numeroChiamate: number;
    nome: string;
    cognome: string;
  
    private readonly costoChiamata = 0.20;
  
    constructor(nome: string, cognome: string) {
      this.nome = nome;
      this.cognome = cognome;
      this.credito = 0;
      this.numeroChiamate = 0;
    }
  
    ricarica(importo: number): void {
      this.credito += importo;
    }
  
    chiamata(minuti: number): void {
      const costoTotale = minuti * this.costoChiamata;
      if (this.credito >= costoTotale) {
        this.credito -= costoTotale;
        this.numeroChiamate += minuti;
      } else {
        console.log("Credito insufficiente per effettuare la chiamata.");
      }
    }
  
    chiama404(): number {
      return this.credito;
    }
  
    getNumeroChiamata(): number {
      return this.numeroChiamate;
    }
  
    azzeraChiamate(): void {
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