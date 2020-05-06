/*function anuidade(valor, mes) {
    let valor = 0
    let mes = 0

    while (mes < 12) {
       
        switch (mes) {
            case 1:
                valor = valor + (valor * 0.1)
                return valor
            case 2:
                valor = valor + (valor * 0.1)
                return valor

        }
    }
}

function 

console.log(anuidade(50, 2)) */

function anuidade (valor, mes){
  let valor = 0
  

  for (let i = 0; i < mes; i++){
    valor = valor + (valor * 0.1)

    
  }

}