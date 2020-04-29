const triangulo = function (a,b,c){
    if(a == b && b == c && c == a){
        return 'Triangulo Equilatero'
    }else if(a == b || b == c ){
        return 'Triangulo Isósceles'
    }else if(a !== b && b !== c && a !== c){
        return 'Triangulo Escaleno'
    }
  
}

console.log(triangulo(1,1,1))
console.log(triangulo(1,1,2))
console.log(triangulo(2,1,3))
