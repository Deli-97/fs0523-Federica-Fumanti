"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getTasseInps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        const utileTasse = this.getUtileTasse();
        return this.redditoannuolordo - utileTasse;
    }
}
class LavoratoreAutonomoStandard extends LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo) {
        const tasseinps = redditoannuolordo * 0.1;
        const tasseirpef = redditoannuolordo * 0.2;
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        return this.tasseinps + this.tasseirpef;
    }
}
const lavoratore1 = new LavoratoreAutonomoStandard(1, 50000);
const lavoratore2 = new LavoratoreAutonomoStandard(2, 75000);
console.log("Lavoratore 1 - Reddito Annuo Netto:", lavoratore1.getRedditoAnnuoNetto());
console.log("Lavoratore 2 - Reddito Annuo Netto:", lavoratore2.getRedditoAnnuoNetto());
