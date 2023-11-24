"use strict";
class Smartphone {
    constructor() {
        this.costoMinuto = 0.20;
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: ${this.carica.toFixed(2)} €`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const mobile1 = new Smartphone();
const mobile2 = new Smartphone();
const mobile3 = new Smartphone();
mobile1.ricarica(50);
console.log(mobile1.numero404());
mobile1.chiamata(5);
console.log(mobile1.numero404());
console.log(`Numero di chiamate: ${mobile1.getNumeroChiamate()}`);
mobile1.azzeraChiamate();
mobile2.ricarica(30);
console.log(mobile2.numero404());
mobile2.chiamata(3);
console.log(mobile2.numero404());
console.log(`Numero di chiamate: ${mobile2.getNumeroChiamate()}`);
mobile2.azzeraChiamate();
mobile3.ricarica(20);
console.log(mobile3.numero404());
mobile3.chiamata(10);
console.log(mobile3.numero404());
console.log(`Numero di chiamate: ${mobile3.getNumeroChiamate()}`);
mobile3.azzeraChiamate();
