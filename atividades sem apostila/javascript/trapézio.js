alert("area e perimetro de um trapézio")
let baseMaior = parseFloat(prompt("Informe a base maior :"));
  let baseMenor = parseFloat(prompt("Informe a base menor :"));
  let altura = parseFloat(prompt("Informe a altura :"));
  let lado1 = parseFloat(prompt("Informe o lado não paralelo 1 :"));
  let lado2 = parseFloat(prompt("Informe o lado não paralelo 2 :"));
  let area = ((baseMaior + baseMenor) * altura) / 2;
  let perimetro = baseMaior + baseMenor + lado1 + lado2;
  alert(`Área do trapézio: ${area.toFixed(2)}\nPerímetro do trapézio: ${perimetro}`);