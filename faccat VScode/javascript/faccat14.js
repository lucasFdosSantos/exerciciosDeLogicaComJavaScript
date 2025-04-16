alert("organiza os numeros em ordem crescente")
alert("digite dois valores para organizarmos em ordem crescente")
let numero1 = parseFloat(prompt("primeiro numero:"))
let numero2 = parseFloat(prompt("segundo numero:"))
if (numero1 > numero2){
alert(`numero ${numero1} é maior que ${numero2} 
    \nlogo, organizado fica ${numero1}, ${numero2}`)

}
else{
    alert(`numero ${numero2} é maior que ${numero1}
        \nlogo, organizado fica ${numero2}, ${numero1}`)
}