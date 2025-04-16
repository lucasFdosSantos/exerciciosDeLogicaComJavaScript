alert("area e perimetro de um retângulo");
let base = parseFloat(prompt("digite o valor da base do retângulo que gostaria de calcular a área e o perímetro"));
let comprimento = parseFloat(prompt("digite o valor do comprimento do retângulo que gostaria de calcular a área e o perímetro"));
let perimetro = 2 * (base + comprimento);
let area = base * comprimento
alert("base do retângulo: "+base+
    "\ncomprimento do retângulo: "+comprimento+
    "\narea do retângulo: "+area.toFixed(2)+
    "\nperímetro do retângulo: "+perimetro.toFixed(2))