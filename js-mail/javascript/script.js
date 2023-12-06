// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// -1 creare una lista specifica di email che possono accedere
// -2 creare un form dove inserie l' email
// -3 convalidare o non l'email inserita


let listaEmail = [
    "matte@gmail.it",
    "alessio@gmail.it",
    "francesco@virgilio.it",
]
console.log(listaEmail)

let submit = document.getElementById("submit");
submit.addEventListener('click', function(){

    let email = document.getElementById("email").value;
    console.log(email)

    let controll = false
    console.log('controll', controll, typeof controll)

    for (let i = 0; i < listaEmail.length; i++) {


        if ( email == listaEmail[i] ) {
            
            controll = true;
        }
    }

    if ( controll == true ){

        alert('email valida')

    }
    else{

        alert('email non valida')
    }
})


