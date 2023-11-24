interface Sim {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
}

class Smartphone implements Sim {
    public carica: number;
    public numeroChiamate: number;
    public costoMinuto: number = 0.20;

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }

    public ricarica(euro: number): void {
        this.carica += euro;
    }

    public numero404(): string {
        return `Credito residuo: ${this.carica.toFixed(2)} €`;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public chiamata(min: number): void {
        const costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}


const mobile1: Smartphone = new Smartphone();
const mobile2: Smartphone = new Smartphone();
const mobile3: Smartphone = new Smartphone();

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
