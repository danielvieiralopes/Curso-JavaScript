function lanchonete(codigo, qtde) {
    switch (codigo) {
        case 100:
            return `${qtde} Cachorro Quente, total a pagar: R$${qtde * 3}.00 reais`
        case 200:
            return `${qtde} Hamburguer Simples, total a pagar: R$${qtde * 4}.00 reais`
        case 300:
            return `${qtde} Cheeseburguer, total a pagar: R$${qtde * 5.50} reais`
        case 400:
            return `${qtde} Bauru, total a pagar: R$${qtde * 7.50} reais`
        case 500:
            return `${qtde} Refrigerante, total a pagar: R$${qtde * 3.50} reais`
        case 600:
            return `${qtde} Suco, total a pagar: R$${qtde * 2.80} reais`
        default:
            return 'Codigo Invalido'
    }
}

console.log(lanchonete(100, 3))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 5))
console.log(lanchonete(400, 3))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 1))
console.log(lanchonete(700, 4))