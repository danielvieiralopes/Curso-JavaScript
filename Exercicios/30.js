function maiorEmenor() {
    let vet = [10, 5, 4, 40, 2, 1, 20]
    let maior = 0
    let menor = 0

    for (let i = 0; i <= vet.length; i++) {
        if (vet[i] > maior) {
            maior = vet[i]
        } else {
            menor = vet[i]
        }

    }
    return `${maior} e o numero maior  ${menor} e o numero menor.`

}

console.log(maiorEmenor())

//CORRECAO

/* function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor)) */ 