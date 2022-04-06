let array1 = Array()
let array2 = Array();
let numero

for (let i = 0; i < 10; i++) {

    numero = Math.floor(Math.random() * 90 + 1)
    if (i > 0) {
        if (presente(i, numero, array1))
            array1[i] = numero;
        else i--
    } else array1[i] = numero

}

for (i = 0; i < 10; i++) {
    numero = parseInt(prompt("inserici valore"));

    if (numero > 0 && numero < 91)
        array2[i] = numero

}
    let contatore = 0;

    for (i = 0; i < 10; i++) {
        numero = array1[i];
        for (j = 0; j < 10; j++) {
            if (numero == array2[j]) {
                contatore++;
            }
        }
    }
    switch (contatore) {
        case 2:
            alert("ambo")
            break;
        case 3:
            alert("terno")
            break;
        case 4:
            alert("quaterna")
            break;
        case 5:
            alert("cinquina")
            break;
        case 10:
            alert("tombola")
            break;
        default:
            alert("non hai vinto")
            break;
    }


    function presente(i, num, array) {

        for (let indice = 0; indice < i; indice++) {
            if (array[indice] == num)
                return false
        }

        return true
    }

    console.log(array1)
    console.log(array2)
