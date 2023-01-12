/* Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total. */
            
let metrosQuadrados = parseInt(prompt('Qual é a metragem da área a ser pintada?'))

let metrosPorLata = 6
let litrosPorLata = 18
let valorLata = 80
let quantidadeDeLatas = (metrosQuadrados / litrosPorLata)
let valorTotal = (quantidadeDeLatas * valorLata)

document.write(`
    Você precisará de ${Math.round(quantidadeDeLatas)} <br>
    Valor total: R$ ${Math.round(valorTotal)}
    `)