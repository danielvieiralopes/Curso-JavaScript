
function fatorial (n) {
    let fator = fator.split(", ")
    let qtde = 0 

    for (let i = n; i > 1; i--){
        fator = n[i]
        qtde++
    }

    for (let j = n; j > qtde; j++){
        let resultado = fator[j] * fator
    }


}

// correcao 


function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))