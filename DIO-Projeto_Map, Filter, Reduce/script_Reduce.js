// Reduce
// (Atividade1) Some todos os números de um array
// (Atividade2) Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

//Atividade 1
// const frutas = [
//     {fruta: 'maçã', quantidade: 8},
//     {fruta: 'pera', quantidade: 25},
//     {fruta: 'uva', quantidade: 50},
//     {fruta: 'banana', quantidade: 10}
// ]

// const totalFrutas = frutas.reduce((prevValue, element) => prevValue + element.quantidade, 0)
// console.log(`A soma de todas as frutas é: ${totalFrutas}`)


//Atividade 2
function myList(saldoDisp, arr){
    return arr.reduce(function (prev, current){
        return prev - current.preco}, saldoDisp)
}
    
const arr = [
    {preco: 18.90},
    {preco: 9.80},
    {preco: 6.59}
]
const saldoDisp = 100
    
console.log(myList(saldoDisp, arr))