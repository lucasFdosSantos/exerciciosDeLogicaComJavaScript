alert("promoção de maçãs")
alert("comprando  12 ou mais, sai por R$:1,00\npreço fora de promoçao R$:1,30")
let maca = parseInt(prompt("quantas maçãs voce gostaria de comprar?"))
if(maca >= 12 ){
   let valorFinal = maca * 1.00
   alert(`entao vao ser ${maca} maçãs,
    \nficou R$:${valorFinal.toFixed(2).replace('.',',')}.
   `)
}
else{
   let valorFinal = maca * 1.30
   alert(`entao vao ser ${maca} maçãs,
    \nficou R$:${valorFinal.toFixed(2).replace('.',',')}.
   `)
}
