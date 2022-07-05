// Atividade 1: Alunos Aprovados
// Crie uma função que recebe o array alunos e um número que irá representar a média final;
// Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

const Alunos = [{
    nome: 'Junior',
    nota: 7,
    turma: '1B',
},
{
    nome: 'Lavínia',
    nota: 9.5,
    turma: '1A',
},
{
    nome: 'Nicolas',
    nota: 3.5,
    turma: '5B',
},
{
    nome: 'Izabel',
    nota: 2.5,
    turma: '2C',
}]
//mostra os alunos aprovados
function alunosAprovados(lista, média){
    let aprovados = []
    for(prop in lista){
        const {nome, nota} = lista[prop]
        if(nota >= média){
            aprovados.push(nome)
        }
    }
    return `Os alunos aprovados são: ${aprovados}`
}
console.log(alunosAprovados(Alunos, 5))

//Mostra os alunos reprovados
function alunosReprovados(lista, média){
    let reprovados = []
    for(prop in lista){
        const {nome, nota} = lista[prop]
        if(nota < média){
            reprovados.push(nome)
        }
    }
    return `Os alunos reprovados são: ${reprovados}`
}
console.log(alunosReprovados(Alunos, 5))