

alert("Questo è un messaggio")
document.write("Hello world!!!")
alert("Questo è un altro messaggio")




function test(num){
   let n = parseInt(num, 2)
    document.write(n.toString())
}

window.onload = () => {
    console.log(converti(00010101))
    console.log(converti(11001010))
    console.log(converti(10010110))
}

function test2() {
    let input = prompt("Mi chiamo", "Ugo")
    console.log(input)
    console.log("io mi chiamo".concat("Ugo"))
    const a  = "ciao"
    const b  = 3
    const convertAndCast = a == b
    console.log(convertAndCast)

}

function test3() {
    let input = prompt("in che anno siamo", 2022)
    if(input != 2022) console.log("risposta sbagliata")
    else if(input == 2022) console.log("risposta giusta") 
}

function test5() {
    let s = new String()

    let o = new Object()

}

dato un array