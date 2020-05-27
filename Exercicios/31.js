
  function negativos (){
      let vet = [2,3,-4,-6,8-14]
      let contador = 0

      for(let i = 0; i < vet.length; i++){
          if (vet[i] < 0){
              contador++
          }
      }
      return `${contador} numeros negativos`
  }

  console.log(negativos())







//APENAS ZUEIRA
// function negativos (numeros){
//     let numeros
//     let vet = []
//     vet.push = numeros.split(", ")
//     let contador = 0

//     for(let i = 0; i < vet.length; i++){
//         if (vet[i] < 0){
//             contador++
//         }
//     }
//     return `${contador} numeros negativos`
// }

// console.log(negativos(2,3,-4,-6,8-14))

