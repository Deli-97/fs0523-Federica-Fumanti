"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CapoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapi() {
        // Applica il saldo all'acquisto del capo
        return this.prezzoivainclusa - this.saldo;
    }
    getAcquistoCapo() {
        // Restituisce il costo totale del capo
        return this.prezzoivainclusa;
    }
}
// Esempio di utilizzo della classe e dei metodi
const capo1 = new CapoAbbigliamento(1, 123, 'Autunno/Inverno', 'Maglione', 456, 2, 'Blu', 50.0, 60.0, 'Disponibile', 10.0);
console.log('Costo totale prima dello sconto:', capo1.getAcquistoCapo());
console.log('Costo totale dopo lo sconto:', capo1.getSaldoCapi());
// Funzione per recuperare i dati dall'API
function fetchDatiApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('Abbigliamento.json');
            const data = yield response.json();
            const capi = data.map((item) => {
                return new CapoAbbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
            });
            return capi;
        }
        catch (error) {
            console.error('Errore durante il recupero dei dati dall\'API:', error);
            throw error;
        }
    });
}
// Esempio di utilizzo del fetchDatiApi
const apiUrl = 'https://esempio-api-capiabbigliamento.com';
fetchDatiApi(apiUrl).then((capi) => {
    console.log('Dati recuperati dall\'API:', capi);
});
