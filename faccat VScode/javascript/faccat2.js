alert("calculado de percentuais de votos")
let  brancos = parseInt(prompt("quantidade total de votos em branco "));
let  nulos = parseInt(prompt("quantidade total de votos nulos "));
let  validos = parseInt(prompt("quantidade total de votos validos"));
let  total = brancos + nulos + validos;
let brancosPer = (brancos / total) * 100
let nulosPer = (nulos / total) * 100
let validosPer = (validos / total) * 100
alert(
`votos totais: ${total}
\nvotos validos: ${validos}, percentual em relaçao ao total ${validosPer.toFixed(2)}%
\nvotos brancos: ${brancos}, percentual em relaçao ao total ${brancosPer.toFixed(2)}%
\nvotos validos: ${nulos}, percentual em relaçao ao total ${nulosPer.toFixed(2)}%
`
)
