"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const generaNumeroCasuale = () => {
        const player1Input = document.getElementById("player1");
        const player2Input = document.getElementById("player2");
        const outputParagraph = document.getElementById("output");
        if (!player1Input || !player2Input || !outputParagraph) {
            console.error("Elementi non trovati.");
            return;
        }
        const giocatore1 = parseInt(player1Input.value);
        const giocatore2 = parseInt(player2Input.value);
        if (isNaN(giocatore1) || isNaN(giocatore2)) {
            outputParagraph.textContent = "Inserisci numeri validi per entrambi i giocatori.";
            return;
        }
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;
        const diffGiocatore1 = Math.abs(numeroCasuale - giocatore1);
        const diffGiocatore2 = Math.abs(numeroCasuale - giocatore2);
        if (giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
            outputParagraph.textContent = `Numero casuale generato = ${numeroCasuale}. Almeno un giocatore ha azzeccato il numero!`;
        }
        else if (diffGiocatore1 === diffGiocatore2) {
            outputParagraph.textContent = `Numero casuale generato = ${numeroCasuale}. Entrambi i giocatori si sono avvicinati allo stesso modo!`;
        }
        else if (diffGiocatore1 < diffGiocatore2) {
            outputParagraph.textContent = `Numero casuale generato = ${numeroCasuale}. Giocatore 1 si è avvicinato di più!`;
        }
        else {
            outputParagraph.textContent = `Numero casuale generato = ${numeroCasuale}. Giocatore 2 si è avvicinato di più!`;
        }
    };
    const button = document.querySelector("button");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", generaNumeroCasuale);
});
