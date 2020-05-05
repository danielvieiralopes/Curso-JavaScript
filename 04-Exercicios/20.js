function cedulas(valor) {
    let cedula1 = 0
    let cedula2 = 0
    let cedula3 = 0
    let cedula4 = 0
    let cedula5 = 0


    let nota
    let resto = valor
    nota = 100
    let qtde = valor / nota

    let nota1 = qtde



    resto = resto % nota
    nota = 50
    qtde = resto / nota

    let nota2 = qtde


    resto = resto % nota
    nota = 10
    qtde = resto / nota
    let nota3 = qtde



    resto = resto % nota
    nota = 5
    qtde = resto / nota
    let nota4 = qtde



    resto = resto % nota
    nota = 1
    qtde = resto / nota
    let nota5 = qtde







}

function resultado(nota1, nota2, nota3, nota4, nota5) {


    if (nota1 > 0) {
        console.log(`${nota1} notas de R$100.00`)

    }
    if (nota2 > 0) {
        console.log(`${nota2} notas de R$50.00`)

    }
    if (nota3 > 0) {
        console.log(`${nota3} notas de R$10.00`)

    }
    if (nota4 > 0) {
        console.log(`${nota4} notas de R$5.00`)

    }
    if (nota5 > 0) {
        console.log(`${nota5} notas de R$1.00`)


    }
}

cedulas(150)