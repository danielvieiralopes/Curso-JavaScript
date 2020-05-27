/* function cedulas(valor) {
  


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





  console.log(resultado(nota1, nota2, nota3, nota4, nota5))

}

function resultado(nota1, nota2, nota3, nota4, nota5) {


    if (nota1 > 0) {
        
        return Math.floor(nota1) 

    }
    if (nota2 > 0) {
        return Math.floor(nota2)

    }
    if (nota3 > 0) {
        return Math.floor(nota3)

    }
    if (nota4 > 0) {
        return Math.floor(nota4)

    }
    if (nota5 > 0) {
        return Math.floor(nota5)

    }
}

cedulas(1959)
*/

//correcao 

function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$100.`
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$50.`
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$10.`
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$5.`
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$1.`
    }

    return resultado
}

console.log(sacarDinheiro(153));
