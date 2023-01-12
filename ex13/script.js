/* Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 */

let altura = parseInt(prompt('Qual é a sua altura?'))

document.write(`O peso ideal para homens: ${Math.ceil(72.7 * (altura - 58))} <br> 
O peso ideal para mulheres é: ${Math.ceil(62.1 * (altura - 44.7))}`)