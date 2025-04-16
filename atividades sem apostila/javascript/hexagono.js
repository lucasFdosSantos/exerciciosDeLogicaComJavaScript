alert("area e perimetro de um hexágono");
let lado = parseFloat(prompt("Informe o comprimento do lado do hexágono:"));
let area = (3 * Math.pow(lado, 2) * Math.sqrt(3)) / 2;
let perimetro = 6 * lado;
alert(`Área do hexágono: ${area.toFixed(2)}\nPerímetro do hexágono: ${perimetro}`);
