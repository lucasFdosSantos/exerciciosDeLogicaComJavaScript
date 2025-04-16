alert("calculo do tempo de uma partida de xadrez");
alert("digite a hora de inicio e de fim(pode ser do dia seguinte ou nao)");
let inicio = parseInt(prompt("hora de inicio da partida em horas(EX: 14,13)")); 
let fim = parseInt(prompt("hora de encerramento da partida(EX: 14,13)"));
let tempo;
if (inicio < fim){
    tempo = fim - inicio
} 
else{
tempo = (24 - inicio ) + fim

}
alert(
    `o tempo total da partida foi de ${tempo}H`
    
)