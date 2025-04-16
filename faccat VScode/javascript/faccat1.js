
alert("idade expressa em dias totais")
let ano = parseInt(prompt("qual a sua idade em anos(EX:27anos):"))
let mes = parseInt(prompt("quantos meses se passram des de o seu aniversário?"))
let dia = parseInt(prompt("qual o dia de hoje em numero(EX:Dia 12)?"))
let total = (ano * 365) + (mes * 30) + dia 
alert(`os dias totais de vida que voce viveu são, ${total}`)
