function parEimpar(){
    let vet = [1,3,6,10,12]
    let impar = 0
    let par = 0
    

    for (let i = 1; i <= vet.length; i++){
        if (vet[i] % 2 == 0){
            par++
        }else{
            impar++
        }
    }
    console.log(`${impar} numeros impar(es) e ${par} numeros pare(s)`)

}


parEimpar()

