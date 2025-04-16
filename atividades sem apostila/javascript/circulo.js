alert("area e perimetro de um círculo");
let raio = parseFloat(prompt("digite o raio do círculo que gostaria de calcular a área e o perímetro"));
let perimetro = 2 * 3.141592653589793 * raio;
let area = 3.141592653589793 * Math.pow(raio, 2)
alert("raio do círculo: "+raio+
    "\narea do círculo: "+area.toFixed(2)+
    "\nperímetro do círculo: "+perimetro.toFixed(2))