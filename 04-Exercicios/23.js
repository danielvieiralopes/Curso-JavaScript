function mediaPonderada(codigo, nota1, nota2, nota3) {

    while (codigo > 0) {
        let maiorNota = 0
        let menorNota = 0
        let notaMeio = 0

        if (nota1 > nota2 && nota1 > nota3) {
            maiorNota = nota1
            if (nota2 > nota3) {
                menorNota = nota3
                notaMeio = nota2
            } else {
                menorNota = nota2
                notaMeio = nota3
            }
        } else if (nota2 > nota1 && nota2 > nota3) {
            maiorNota = nota2
            if (nota1 > nota3) {
                menorNota = nota3
                notaMeio = nota1
            } else {
                menorNota = nota1
                notaMeio = nota3
            }
        } else if (nota3 > nota2 && nota3 > nota1) {
            maiorNota = nota3
            if (nota2 > nota1) {
                menorNota = nota1
                notaMeio = nota2
            } else {
                menorNota = nota2
                notaMeio = nota1
            }
        }


        let media = ((maiorNota * 4) + (notaMeio * 3) + (menorNota * 3)) / 3

        if (media >= 5) {
            return `
                 Código do aluno: ${codigo}.
                 Notas: ${nota1}, ${nota2}, ${nota3}.
                 Média: ${media.toFixed(2)}
                 Situação: APROVADO.`
        } else {
            return `
                Código do aluno: ${codigo}.
                Notas: ${nota1}, ${nota2}, ${nota3}.
                Média: ${media}.
                Situação: REPROVADO.`
        }



    }

    return 'Código invalido'
}



console.log(mediaPonderada(10, 7, 6, 10))
console.log(mediaPonderada(3, 5, 2, 5))
console.log(mediaPonderada(-1, 5, 2, 3))


/* CORRECAO

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)

*/ 