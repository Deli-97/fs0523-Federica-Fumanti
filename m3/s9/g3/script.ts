abstract class LavoratoreAutonomo {
    constructor(
        public codredd: number,
        public redditoannuolordo: number,
        public tasseinps: number,
        public tasseirpef: number
    ) { }


    abstract getUtileTasse(): number;


    getTasseInps(): number {
        return this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.tasseirpef;
    }

    getRedditoAnnuoNetto(): number {
        const utileTasse = this.getUtileTasse();
        return this.redditoannuolordo - utileTasse;
    }
}


class LavoratoreAutonomoStandard extends LavoratoreAutonomo {
    constructor(codredd: number, redditoannuolordo: number) {

        const tasseinps = redditoannuolordo * 0.1;
        const tasseirpef = redditoannuolordo * 0.2;

        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }

    getUtileTasse(): number {
        return this.tasseinps + this.tasseirpef;
    }
}

const lavoratore1 = new LavoratoreAutonomoStandard(1, 50000);
const lavoratore2 = new LavoratoreAutonomoStandard(2, 75000);

console.log("Lavoratore 1 - Reddito Annuo Netto:", lavoratore1.getRedditoAnnuoNetto());
console.log("Lavoratore 2 - Reddito Annuo Netto:", lavoratore2.getRedditoAnnuoNetto());