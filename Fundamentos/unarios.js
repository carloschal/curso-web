let num1 = 1
let num2 = 2

num1++ // pós fixada
console.log(num1)
--num1 // pré fixada tem prioridade
console.log(num1)

console.log(++num1 === num2--) // evitar esse tipo de código
console.log(num1 == num2)