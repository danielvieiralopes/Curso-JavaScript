function fusao (){
    let vetorInteiro = [1,2,3,4]
    let vetorString = ['a','b','c','d']
    let vetorDouble =[0.1,0.2,0.3,0.4]
     resultado = []

   resultado.push(resultado.concat(vetorInteiro).concat(vetorString).concat(vetorDouble).split(", "))
    
}

fusao()

// CORRECAO

// let vetorInteiro = [1, 2, 3, 4]
// let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
// let vetorDouble = [1.1, 2.2, 3.3, 4.4]

// function concatenar (...args) {
//     resultado = []
//     for(let i = 0; i<arguments.length; i++){
//         resultado = resultado.concat(arguments[i])
//     }
//     return resultado;
// }

// console.log(concatenar(vetorInteiro, vetorDouble))
// console.log(concatenar(vetorDouble, vetorString))