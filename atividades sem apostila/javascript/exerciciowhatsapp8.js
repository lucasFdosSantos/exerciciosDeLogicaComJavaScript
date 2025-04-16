alert("contador de vogais")
alert("contarei a vogal de todas as palavras colocadas")
let palavra;
do{
     palavra = prompt("digite uma palavra(digite 'SAIR' em caixa alta para sair do programa)")
let contadorvogal = 0;

    if (palavra !== "SAIR") {
   let contagemvogais = 0;
   
   for(let i = 0; i < palavra.length; i++){
    if ("aeiouAEIOU".includes(palavra[i])) {

    contadorvogal++  
       
    }
     
   }
alert (`a quantidade total de vogais na palavra ${palavra.toUpperCase()} é ${contadorvogal}`)
}

} while(palavra !== "SAIR");
    alert("programa finalizado")
