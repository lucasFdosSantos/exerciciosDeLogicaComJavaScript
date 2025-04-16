alert("Verificador de Triângulo");
alert("vou ler três valores e dizer se formam um triângulo.");

let ladoPrimeiro = parseFloat(prompt("Digite o valor do primeiro lado:").replace(',', '.'));
let ladoSegundo = parseFloat(prompt("Digite o valor do segundo lado:").replace(',', '.'));
let ladoTerceiro = parseFloat(prompt("Digite o valor do terceiro lado:").replace(',', '.'));

if (ladoPrimeiro < ladoSegundo + ladoTerceiro && ladoSegundo < ladoPrimeiro + ladoTerceiro && ladoTerceiro < ladoPrimeiro + ladoSegundo){
    alert("Esses valores fomam um triângulo.");
} else {
    alert("Esses valores nao formam um triângulo.");
}