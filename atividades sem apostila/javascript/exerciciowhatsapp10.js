alert("faceboca");
alert("bem-vindo ao faceboca");
let nome = "lulu";
let senha = "1234";
let nomeentrada = prompt("digite seu nome de ususario")
while(nomeentrada !== nome){   
    if (nomeentrada !== nome){
        alert("nome incorreto");
        nomeentrada = prompt("insira seu nome de usuario:");
}
}
let senhaentrada = prompt("digite sua senha de acesso")
 while (senhaentrada !== senha){  
     if (senhaentrada !== senha) {
        alert("senha errada");
        senhaentrada = prompt("digite sua senha de acesso:");
     }
}
alert("usuario logado com sucesso")