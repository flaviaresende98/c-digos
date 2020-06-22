const alunosTurmaA = [
    {
        nome: "Flávia",
        nota: 7.5
    },
    {
        nome: "Daniel",
        nota: 3.2
    },
    {
        nome: "Maria Clara",
        nota: 7.9
    },
    {
        nome: 'Daniel',
        nota: 1.2
    }
]
const alunosTurmaB = [
    {
        nome: "Eliane",
        nota: 8.8
    },
    {
        nome: "Sérgio",
        nota: 7.4
    },
    {
        nome: "José",
        nota: 6.9
    },
    {
        nome : "Novo Aluno",
        nota : 5
    }
]
function calculoMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length ; i++){
            soma = soma +alunos[i].nota


    }
    const media = soma / alunos.length
    return media
}

const media1 = calculoMedia(alunosTurmaA)
const media2 = calculoMedia(alunosTurmaB)


function enviaMensagem(media, turma) {
    if (media > 5){
        console.log(`A media da ${turma} foi de ${media}. Parabéns`)
    }else {
        console.log(`A média da ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, `Turma A`)
enviaMensagem(media2, `Turma B`)

