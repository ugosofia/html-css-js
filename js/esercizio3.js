/** 
 Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.
  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

    */


let array1 = new Array(10)
let array2 = new Array(10)
let array3 = new Array(10)


for (let index = 0; index < 10; index++) {
    array1[index] = Math.floor(Math.random() * 10 + 1)
    array2[index] = Math.floor(Math.random() * 10 + 1)
    
}
console.log(array1)
console.log(array2)

let p = document.getElementsByClassName('classP')

let operazione = prompt("che operazione vuoi eseguire?")
switch (operazione) {
    case "addizione":
        addizione(array1,array2)
        break;
    case "sottrazione":
        sottrazione(array1,array2)
        break;
    case "moltiplicazione":
        moltiplicazione(array1,array2)
        break;
    case "divisione":
        divisione(array1,array2)
        break;
}
    document.write('<table id="txt" border"1">')
    document.write('<tr id="txt" >')
    document.write('<td align  "center" >')
    document.write(array3)
    document.write('</td>')
    document.write('</tr>')
    document.write('</table>')

    function addizione(a,b) {

        for (let index = 0; index < 10; index++) {
            
            array3[index] = array1[index] + array2[index]
            
        }
    }

    function sottrazione(a,b) {
        for (let index = 0; index < 10; index++) {
            
            array3[index] = a[index] + b[index]   
        }
    }

    function moltiplicazione(a,b) {

        for (let index = 0; index < 10; index++) {
            
            array3[index] = a[index] * b[index] 
        }
    }

    function divisione(a,b) {

        for (let index = 0; index < 10; index++) {
            
            array3[index] = a[index] / b[index]             
        }
    }

