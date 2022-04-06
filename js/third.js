
/** 
Invertimi
Scrivi un programma che dato un numero N, generi un array di N numeri casuali
e stampi sia l'array ottenuto che quello invertito.
Esempio:
  Input: N = 5
  Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]
Variante:
Non utilizzare array/variabili di appoggio per l'inversione.
*/

let N = prompt("Inserisci N")


array1 = new Array(N)

for (let i = 0; i < N; i++) {
    
    array1[i] = Math.floor(Math.random() * 90 + 1)

}
console.log(array1)

let i = 0

for (let index = N; index > array1.length/2 ; index--){
    let temp
    temp = array1[index]
    array1[index] = array1[i]
    array1[i] = temp

    i++
}

console.log(array1)


let massimo

for (let index = 0; index < array1.length - 1; index++) {
    massimo = index
    for (let k = index+1; k < array1.length; k++){
              
        if(array1[k] > array1[index]){
            massimo = k
            let temp1
            temp = array1[index]
            array1[index] = array1[i]
            array1[i] = temp
            
    }
    
}
}

console.log(array1)


