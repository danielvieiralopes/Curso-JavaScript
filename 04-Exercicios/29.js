function vetor (){
   let vet = [1,5,4,10,15,18,19,20,30,32,64] 
   let intervalo = 0
   let foraIntervalo = 0
    for (let i = 0; i <= vet.length; i++){
        if(vet[i]>=10 && vet[i]<=20){
            intervalo++
        }
        else{
            foraIntervalo++
        }
    }
    console.log(`${intervalo} numeros no intervalo.`)
}

vetor()