function diaUtil(dia){
      
   
    switch (dia % 7){
       case 0:
           console.log('Sabado')
        break
        case 1:
           console.log('Domingo')
        break
        case 2:
           console.log('Segunda')
        break
        case  3:
           console.log('Terça')
        break
        case  4:
           console.log('Quarta')
        break
        case  5:
           console.log('Quinta')
        break
        case  6:
           console.log('Sexta')
        break
        
    default:
        console.log('Dia Invalido')
   }
}

diaUtil(10)
diaUtil(33)

//correcao 

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));

