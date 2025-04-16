alert("conversor de fahrenheit para celsius")
let fahrenheit = parseFloat(prompt("digite a temperatura em graus fahrenheit(°F) que gostaria de converter para celsius(°C)."))
let celsius = (fahrenheit - 32) * (5 / 9)
alert(`${fahrenheit}°F convertido para ${celsius}°C`)