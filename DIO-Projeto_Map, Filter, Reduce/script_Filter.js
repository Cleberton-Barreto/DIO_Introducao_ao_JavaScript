// Filter
// Filtre e retorne todos os números pares de um array.

function numPares(arr){
    return arr.filter(function(item){
        if(item % 2 === 0){
            return item
        }
    })
}
const nums = [2,4,6,8,10,1,3,5,7,9]
console.log(numPares(nums))