function crescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    let criancaMaior = 0
    let criancaMenor = 0
    let taxaMaior = 0
    let taxaMenor = 0
    let ano = 0

    
    if(altura1 > altura2){
        criancaMaior = altura1
        taxaMaior = taxaCrescimento1
        criancaMenor = altura2
        taxaMenor = taxaCrescimento2
    }else{
        criancaMaior = altura2
        taxaMaior = taxaCrescimento2
        criancaMenor = altura1
        taxaMenor = taxaCrescimento1
    }


    while (criancaMenor < criancaMaior){
     criancaMenor = criancaMenor + (criancaMenor * taxaMenor)
        ano++
    }

    console.log(`A criança menor demorara ${ano} anos, para ultrapassar a crianca maior. `)


}

crescimento(130,0.1,100,0.2)


//CORRECAO

/*
function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));

*/