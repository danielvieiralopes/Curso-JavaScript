function pagamento (plano, salarioAtual){
    switch(plano){
        case 'A':
            return (salarioAtual + (salarioAtual * 0.1))
        case 'B':
            return (salarioAtual + (salarioAtual * 0.15))
        case 'C':
            return (salarioAtual + (salarioAtual * 0.20))
        default:
            return 'Número fora do intervalo.'

    }

}

console.log(pagamento('A', 1000))
console.log(pagamento('B', 1000))
console.log(pagamento('C', 1000))
console.log(pagamento('D', 1000))

//correcao

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
