/*Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.*/

function ComparaNumeros(){
    const valor1 = document.getElementById('txtn1')
    const valor2 = document.getElementById('txtn2')
    let num1 = (valor1.value)
    let num2 = (valor2.value)
    let res = document.getElementById('res')
    if(num1 === num2){
        res.innerHTML += `O número ${num1} e o número ${num2} são do mesmo valor e tipo.`
    }else{
        res.innerHTML += `Os números digitados ${num1} e ${num2} não são iguais.`
    }
}
ComparaNumeros(num1, num2)