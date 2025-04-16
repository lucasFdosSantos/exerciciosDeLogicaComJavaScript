alert("Verificador de Aposentadoria");

let codigoEmpregado = prompt("Digite o código do empregado:");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));
//serve pra pegar o ano atual automaticamente
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;

let requerAposentadoria = idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25);

alert(`Empregado Código: ${codigoEmpregado}
Idade: ${idade} anos
Tempo de trabalho: ${tempoTrabalho} anos
Situação: ${requerAposentadoria ? "Requerer aposentadoria" : "Não requerer"}`);