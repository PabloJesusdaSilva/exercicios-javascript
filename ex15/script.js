/* Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.

+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$ */

//descontos

let ganhoPorHora = parseInt(prompt('Quanto você ganha por hora?'))
let horasTrabalhadas = parseInt(prompt('Quantas horas você trabalhou esse mês?'))

let salario = ganhoPorHora * horasTrabalhadas

let descontoIR = (salario * 0.11)
let descontoIss = (salario * 0.08)
let descontoSindicato = (salario * 0.05)
let salarioLiquido = (salario - descontoIR - descontoIss - descontoSindicato) 

document.write(`
    + Salário Bruto : R$ ${salario} <br>
    - IR (11%) : R$ ${descontoIR} <br>
    - INSS (8%) : R$ ${descontoIss} <br>
    - Sindicato (5%) : R$ ${descontoSindicato} <br>
    = Salário Liquido : R$ ${salarioLiquido}
`)