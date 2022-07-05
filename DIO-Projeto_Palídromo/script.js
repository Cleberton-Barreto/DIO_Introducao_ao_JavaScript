/*Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

let obj = 'radar'
let objn = obj.split('').reverse().join('')
console.log(` Palavra: ${obj}`)
if(obj === objn){
    console.log(`A palavra ${objn} é um Palíndromo`)
}else{
    console.log(`A palavra ${objn} não é um Palíndormo`)
}