/* 
Richiesta del prezzo totale di un viaggio - info:

1) Il programma deve richiedere all'utente il numero di km da percorrere e la sua età.
- In questo caso si sta parlando di due prompt in let.

2) Il prezzo del biglietto è definito in base ai km (0.21€ al km);
- è necessario definire una variabile in let posta a racchiudere il valore derivato 
dal calcolo del prezzo in base ai km, senza considerare gli sconti suddivisi per fasce d'età

3) Vanno applicate due differenti tipologie di sconto in base all'età del passeggero. 
- Il tutto deve strutturarsi teoricamente all'interno di un if, un else if e un else. 

4) Il risultato deve essere stampato a schermo
- il risultato deve essere approssimato a massimo 2 decimali, al fine di indicare i centesimi sul prezzo.
- stabilire un collegamento con l'elemento html che presenterà il risultato.
*/

//determino il funzionamento del prompt relativo ai km da percorrere
let kmNum = prompt("Quanti chilometri intendi percorrere?");
//specifico che kmNum deve essere un numero.
kmNum = parseInt(kmNum);

//determino il funzionamento del prompt relativo all'età dell'utente
let passAge = prompt("Quanti anni hai?");
passAge = parseInt(passAge);
//Creo una variabile atta a rappresentare il prezzo del viaggio senza sconti:
let nodiscountPrice = kmNum * 0.21;
nodiscountPrice = +nodiscountPrice.toFixed(2);
console.log(nodiscountPrice);

//definisco in quale elemento HTML verrà stampata l'informazione di cui ho bisogno
let outputHtml = document.getElementById("prezzo-tot-viaggio");

//Imposto ciò che mi è necessario per il funzionamento degli operatori:
//definisco una variabile relativa allo sconto del 20%
let twentyDiscount = nodiscountPrice * 0.8;
twentyDiscount = +twentyDiscount.toFixed(2);
console.log(twentyDiscount);
//definisco una variabile relativa allo sconto del 40%
let fortyDiscount = nodiscountPrice * 0.6;
fortyDiscount = +fortyDiscount.toFixed(2);
console.log(fortyDiscount);

if (passAge < 18) {
  outputHtml.innerHTML = `${twentyDiscount}`;
} else if (passAge > 65) {
  outputHtml.innerHTML = `${fortyDiscount}`;
} else {
  outputHtml.innerHTML = `${nodiscountPrice}`;
}
