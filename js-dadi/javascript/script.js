// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// 1-creare due generatore di numeri da uno a sei;
// 2- stabilire il vincitore in base al punteggio più Alto




let tiraDadi = document.getElementById ('genera');
tiraDadi.addEventListener ('click',function(){

    let generatorePlayer  =  Math.floor(Math.random() * ( 6 - 1 + 1) + 1);
    let generatoreCpu = Math.floor(Math.random() * ( 6 - 1 + 1) + 1);

    document.getElementById("dado1").innerHTML = generatorePlayer;
    document.getElementById("dado2").innerHTML = generatoreCpu;

    if ( generatorePlayer > generatoreCpu ) {
        document.getElementById('result').innerHTML = "player-win"
    }
    else if (  generatorePlayer == generatoreCpu ){
        document.getElementById('result').innerHTML = "patta"
    }
    else {
        document.getElementById('result').innerHTML = "cpu-win"
    }
})

