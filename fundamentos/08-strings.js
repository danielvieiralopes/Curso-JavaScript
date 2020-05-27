const escola = 'Cod3r';

console.log(escola.charAt(4)) // retorna 'r'
console.log(escola.charAt(5)) // nao retorna nada 
console.log(escola.charCodeAt(3)) //retorna o valor na tabela unicode '51'
console.log(escola.indexOf('3')) // retorna o indice que esta o valor informado '3'

console.log(escola.substring(1)) // retorna o conteudo a partir do indice 1 'od3r'
console.log(escola.substring(0, 3)) //retorna o conteudo a partir do indice 0 pegando 3 caracteres 'Cod'

console.log('Escola'.concat(escola).concat('!'))
console.log('Escola' + escola + '!')
console.log(escola.replace(3, 'e')) // substitui o '3' pelo 'e'

console.log('Ana, Maria, Pedro'.split(',')) // transforma em array
