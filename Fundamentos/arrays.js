const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // adicionando item a uma posição
console.log(valores)
console.log(valores.length) // tamanho do array

valores.push({id:3}, false, null, 'teste') // add itens
console.log(valores)

console.log(valores.pop()) // apenas o último
delete valores[0]
console.log(valores)

console.log(typeof valores)