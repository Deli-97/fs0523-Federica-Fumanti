class CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(
        id: number,
        codprod: number,
        collezione: string,
        capo: string,
        modello: number,
        quantita: number,
        colore: string,
        prezzoivaesclusa: number,
        prezzoivainclusa: number,
        disponibile: string,
        saldo: number
    ) {
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

    getSaldoCapi(): number {
        return this.prezzoivainclusa - this.saldo;
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa;
    }
}

const capo1 = new CapoAbbigliamento(
    1,
    123,
    'Autunno/Inverno',
    'Maglione',
    456,
    2,
    'Blu',
    50.0,
    60.0,
    'Disponibile',
    10.0
);

console.log('Costo totale prima dello sconto:', capo1.getAcquistoCapo());
console.log('Costo totale dopo lo sconto:', capo1.getSaldoCapi());

async function fetchDatiApi(url: string): Promise<CapoAbbigliamento[]> {
    try {
        const response = await fetch('Abbigliamento.json');
        const data = await response.json();
        const capi: CapoAbbigliamento[] = data.map((item: any) => {
            return new CapoAbbigliamento(
                item.id,
                item.codprod,
                item.collezione,
                item.capo,
                item.modello,
                item.quantita,
                item.colore,
                item.prezzoivaesclusa,
                item.prezzoivainclusa,
                item.disponibile,
                item.saldo
            );
        });
        return capi;
    } catch (error) {
        console.error('Errore durante il recupero dei dati dall\'API:', error);
        throw error;
    }
}

const apiUrl = 'https://esempio-api-capiabbigliamento.com';
fetchDatiApi(apiUrl).then((capi) => {
    console.log('Dati recuperati dall\'API:', capi);
});
