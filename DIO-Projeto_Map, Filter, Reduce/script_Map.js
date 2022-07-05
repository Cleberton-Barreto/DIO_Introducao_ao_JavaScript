//Map
//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

//Map com método 'this';
// const uva = {
//     value: 5
// }
// const pera = {
//     value: 10
// }

// function mapComThis(arr, thisArg){
//     return  arr.map(function(item){
//         return item * this.value
//     },thisArg)
// }

// const nums = [1,2]
// console.log(mapComThis(nums, uva))
// console.log(mapComThis(nums, pera))


//Map sem o método 'this';

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}
const nums = [1,2,3,4,5,6,7,8,9]

console.log(mapSemThis(nums))
console.log(nums)