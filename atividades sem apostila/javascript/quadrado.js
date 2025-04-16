alert("area e perimetro de um quadrado");
let lado = parseFloat(prompt("digite o valor dos lados do quadrado que gostaria de calcular a área e o perímetro"));
let perimetro = 4 * lado;
let area = Math.pow(lado, 2)
alert("lado do quadrado: "+lado+
    "\narea do quadrado: "+area.toFixed(2)+
    "\nperímetro do quadrado: "+perimetro.toFixed(2))