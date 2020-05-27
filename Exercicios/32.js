function mediaVetor (){
    let vet = [3,5,8,10,9,6]
    let notas = 0

    for (let i = 0; i < vet.length; i++){
         notas += vet[i]
    }
    let media = notas / vet.length
    return `A media e: ${media.toFixed(2)}`
}

console.log(mediaVetor())