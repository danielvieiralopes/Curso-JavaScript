function bhaskara (a, b, c){
 if (a == 0){
     a = 1
 }else if (b == 0){
     b = 1
 }else if(c == 0){
     c = 1
 }
 
  delta = Math.pow(b,2) - 4 * a * c

  raizdeltapositivo = ((b * -1) + Math.sqrt(delta))/ 2 * a
  raizdeltanegativo =((b * -1) - Math.sqrt(delta))/ 2 * a
    
  if (delta < 0) {
      console.log(`Delta é negativo: ${delta}`)
  }else {
      console.log(`Negativo: ${raizdeltanegativo}, Positivo: ${raizdeltapositivo}`)
  }
    
}

bhaskara(3, -5, 12)

// correcao 

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
