alert("Sistema de login - Digite seu código de usuário");


let codigoCorreto = 1234;
let senhaCorreta = 9999;

let codigoDigitado = parseInt(prompt("Digite o código do usuário:"));

if (codigoDigitado !== codigoCorreto) {
    alert("Usuário inválido!");
} else {
    
    let senhaDigitada = parseInt(prompt("Digite a senha:"));
    
    if (senhaDigitada !== senhaCorreta) {
        alert("Senha incorreta!");
    } else {
        alert("Acesso permitido ");
    }
}