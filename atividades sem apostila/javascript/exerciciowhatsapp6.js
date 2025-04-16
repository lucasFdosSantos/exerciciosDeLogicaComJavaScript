alert("calucladora infinita de media escolar")
alert("digite notas de 1 a 10 para somar e calcular a media, digite uma nota invalida(menor que 0 ou maior que 10) para para a execuçao do programa ");
let contador = 0;
let nota;
let soma = 0;
do{
   nota = parseFloat(prompt("digite uma nota de 1 a 10:"))
   if(nota >= 0 && nota <= 10){
   soma = soma + nota;
   contador++
   }
}while(nota >= 0 && nota <= 10);
if (contador > 0) {
    let media = soma / contador;
    alert(`A média de todas as notas digitadas é ${media.toFixed(1).replace('.', ',')}`);
} else {
    alert("Nenhuma nota válida foi digitada.");
}