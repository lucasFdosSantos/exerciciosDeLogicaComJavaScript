alert("veja se você pode votar ou não");
alert (`se tiver mais de 18 é obrigatorio
    \nse tiver entre 18 e 16 não é obrigatorio mas, é permitido
    \nse tiver menos de 16 é proibido`);
    let nascimento = parseInt(prompt("digite o ano em que voce nasceu"));
    let anoAtual = parseInt(prompt("digite o ano atual"));
    let idade = anoAtual - nascimento;
    let anosEspera = 16 - idade;
    if(idade >= 18 ){
        alert(`você tem ${idade} 
            \nvocê deve votar obrigatoriamente`);
    }
    else if(idade <= 16){
        alert(`voce tem ${idade}
            \nvoce nao pode votar, espere mais ${anosEspera} `);
    }
    else {
        alert(`voce tem ${idade}
            \nvocê pode votar, mas não é obrigatorio`)
    }