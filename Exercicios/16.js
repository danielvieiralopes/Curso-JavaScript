function calculadora(a,operacao,b){
    switch(operacao){
        case '+': 
           return a + b
        case '-':
           return a - b 
        case '*':
           return a * b
        case '/':
           return a / b
        default:
            return 'Operação Invalida'       
}
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));