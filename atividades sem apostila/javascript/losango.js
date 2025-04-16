alert("area e perimetro de um losângo");
let diagonalMaior = parseFloat(prompt("Informe a diagonal maior :"));
  let diagonalMenor = parseFloat(prompt("Informe a diagonal menor :"));
  let lado = parseFloat(prompt("Informe o comprimento do lado :"));
  let area = (diagonalMaior * diagonalMenor) / 2;
  let perimetro = 4 * lado;
  alert(`Área do losango: ${area}\nPerímetro do losango: ${perimetro}`);