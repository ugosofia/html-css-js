const cookie = () => {

    const dato= prompt("Inserisci il tuo nome","Nome");
     document.cookie = `NomeUtente= ${dato};
     ` ;
}

cookie();

 const localStorage = () => {
    window.localStorage.setItem("Username", "Ugo")
    alert(window.localStorage.getItem("Username"))

}

localStorage();

