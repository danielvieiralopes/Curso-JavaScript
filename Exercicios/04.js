function divisao(dividendo,divisor){
  
     console.log(dividendo/divisor, dividendo%divisor)
}

divisao(3, 2)

//correcao
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)