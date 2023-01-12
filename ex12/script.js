/* Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58 */

let altura = parseInt(prompt('Digite a sua altura'))

document.write(`O seu peso ideal é: ${Math.ceil(72.7 * (altura - 58))}`)