function revendaCarro (automovel){
    switch(automovel){
        case 'Hatch':
            return 'Compra efetuada com Sucesso'
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':        
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(revendaCarro('Hatch'))
console.log(revendaCarro('Sedan'))
console.log(revendaCarro('Motocicleta'))
console.log(revendaCarro('Caminhonete'))
console.log(revendaCarro('Lancha'))