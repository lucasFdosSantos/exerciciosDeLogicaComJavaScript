alert("teste sua sorte nesse jogo de adivinho");
alert("digite um numero de 1 a 10, se acertar voce ganha, se nao, voce perde");
let numero = Math.floor (Math.random() * 11 );
let palpite;
let dica;

do {
     palpite = parseInt(prompt("digite um numero de 1 a 10"));
    dica = (palpite > numero) ? "mais pra baixo" : "mais pra cima";
    (palpite !== numero) ? alert(`${dica}`) : alert(`voce acertou o numero era ${numero}`); 
} while (palpite !== numero); 
