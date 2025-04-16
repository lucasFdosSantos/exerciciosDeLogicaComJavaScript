alert("configurador de placar de jogo de futebol")
let time1 = prompt("qual o nome do primeiro time?")
let gol1 = parseInt(prompt("quantos gols ele marcou no adversario?"))
let time2 = prompt("qual o nome do segundo time?")
let gol2 = parseInt(prompt("quantos gols ele marcou?"))
let vencedor;
if (gol1 == gol2){

    alert(`EMPATE
        \n${time1}, marcou ${gol1} gols
        \n${time2}, marcou ${gol2} gols
    `)
    
}
else if(gol1 > gol2){
    alert(`TIME ${time1} VENCEDOR!
        \n${time1}, marcou ${gol1} gols
        \n${time2}, marcou ${gol2} gols
    `)
}
else{
    alert(`TIME ${time2} VENCEDOR!
        \n${time1}, marcou ${gol1} gols
        \n${time2}, marcou ${gol2} gols
    `)
}