alert("calculadora de media das avaliações escolares")
alert("a media necessaria para passar é 6 ou mais")
let avaliaçao1 = parseFloat(prompt("digite a nota da primeira avaliação"));
let avaliaçao2 = parseFloat(prompt("digite a nota da segunda avaliação"));

let media = (avaliaçao1 + avaliaçao2) / 2
if(media >= 6 ){
alert(`sua media foi de ${media}
    \nvoce foi aprovado!
    `)
}
else{
    alert(`sua media foi de ${media}
        \nvoce não foi aprovado,estude mais
`)
}