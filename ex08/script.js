// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let valorPorHora =  parseInt(prompt('Quanto você ganha por hora?'))
let horasTrabalhadas = parseInt(prompt('Quantas horas você trabalhou por mês?'))

document.write(`O seu salário é ${valorPorHora * horasTrabalhadas   }`)
