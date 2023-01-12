// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

let grausCelsius = parseInt(prompt('Digite a temperatura em graus Celsius'))

document.write(`A temperatura em graus Fahrenheit é ${Math.ceil((grausCelsius * 1.8) + 32)}`)