

function quitanda (fruta){
    

    switch(fruta){
        case 'Maçã': 
        return 'Não vendemos essa fruta aqui'
        case 'Kiwi': 
        return 'Estamos com escassez de Kiwis'
        case 'Melancia':
        return 'Aqui está, são R$3,00 reais o quilo'
        default:
        return 'Erro, fruta invalida'
    }
}

console.log(quitanda('Maçã'))
console.log(quitanda('Kiwi'))
console.log(quitanda('Melancia'))
console.log(quitanda(' '))