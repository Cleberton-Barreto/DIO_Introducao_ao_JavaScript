//Atividade 2: This
//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculeIdade(anos){
    return `Daqui ${anos} anos, ${this.nome} terá ${this.age + anos} anos de idade.`
}

const pessoa1 = {
    nome: 'Junior',
    age: 33
}
const pessoa2 = {
    nome: 'Lavínia',
    age: 3
}
const pessoa3 = {
    nome: 'Nícolas',
    age: 1
}
const pessoa4 = {
    nome: 'Izabel',
    age: 26
}

console.log(calculeIdade.call(pessoa1, 15))
console.log(calculeIdade.apply(pessoa2, [15]))
