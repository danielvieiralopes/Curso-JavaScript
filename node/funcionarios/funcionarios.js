const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// axios.get(url).then(response => {
//     const funcionarios = response.data
//     console.log(funcionarios)
// })

axios.get(url).then(response => {
    const funcionarios = response.data


    
    const apenasChina = funcionarios.pais == china

     const resultado = funcionarios.filter(apenasChina)
     console.log(resultado)


    // console.log(funcionarios.filter(apenasF))
    


})