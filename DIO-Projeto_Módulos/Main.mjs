// Atividade
// Esta atividade tem como objetivo que você veja no console do seu navegador como os módulos funcionam.

// 1. Instale a extensão "Live Server" no seu VSCode;
// 2. Crie um arquivo com uma estrutura HTML padrão;
// 3. Crie dois arquivos .js ou .mjs, um chamado funcoes e outro chamado main;
// 4. No arquivo funcoes:
//     * Crie uma função chamada mostraIdade, que recebe nome e idade e retorna a string: A idade de ${nome} é ${idade};
//     * Siga o mesmo padrão para outras funções como mostraCidade e mostraHobby;
//     * Exporte estas funções.
// 5. No arquivo main:
//     * Importe as funções do arquivo funcoes;
//     * Faça a chamada de todas elas;
// 6. Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.


import { mostraIdade, mostraCidade, mostraHobby } from "./Funções.mjs";

console.log(mostraIdade('Cleberton', 33))
console.log(mostraCidade('Cleberton', 'São Paulo)'))
console.log(mostraHobby('Cleberton', 'jogando RPG no PC'))