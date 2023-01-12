// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
let grausFahrenheit = parseInt(prompt('Digite a temperatura Fahrenheit'))

document.write(`A temperatura em Celsius é ${Math.ceil((grausFahrenheit -32) / 1.8)}`)