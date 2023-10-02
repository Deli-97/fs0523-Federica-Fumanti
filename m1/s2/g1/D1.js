/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*Esistono diversi Data Types in JavaScript:

Dato Stringa: indica sia un solo carattere sia un insieme di parole.
Le stringhe vengono definite tramite l'utilizzo della singola virgoletta ' ', o dall'utilizzo delle doppie virgolette "".

Dato Numerico: viene indicato senza differenza tra intero e decimale.

Dato Booleano: ha due soli valori true o false. Vengono usati per scoprire se l'espressione (o una variabile) è vera.

Array: un array è una variabile in grado di registrare più valori contemporaneamente. Viene creato tramite le parentesi []

Oggetto: Un oggetto può essere creato tramite le parentesi graffe {}, con una lista di proprietà.
Gli oggetti sono dei contenitori di dati (chiamati "proprietà"), correlati tra di loro, quindi che abbiano un senso metterli all'interno
dello stesso contenitore. Un oggetto, ad esempio, potrebbe contenere i dati di una persona: il nome, il cognome, l'età, ecc...

<script>
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let nome = 'Federica'
console.log(nome)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let a = 12
let b = 20
console.log(a + b)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const NOME = 'Federica';
//NOME = 'Fumanti'; // Il codice genera errore
console.log(NOME);

const PERSONA = {
  nome : 'Federica',
  cognome : 'Fumanti'
}
Object.freeze(PERSONA);
PERSONA.nome ='Fumanti';

console.log(PERSONA);
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
x = 12
console.log(x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = 'john'
let name2= 'John'

console.log(name1 != name2);

//EXTRA

console.log(name1.toLowerCase == name2.toLowerCase);

//</script>