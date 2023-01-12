/* Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo. */

let numInteiro1 = parseInt(prompt('Digite o primeiro numero inteiro'))
let numInteiro2 = parseInt(prompt('Digite o segundo numero inteiro'))
let numReal = parseInt(prompt('Digite um numero real '))

document.write(`O produto do dobro do primeiro com metade do segundo é: ${(numInteiro1 * 2) + numInteiro2 / 2} <br>`)
document.write(`A soma do triplo do primeiro com o terceiro é: ${(numInteiro1 * 3) + numReal} <br>`)
document.write(`O terceiro elevado ao cubo é: ${numReal ** 3}`)