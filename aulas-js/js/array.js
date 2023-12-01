// const lista = ["macarrão", "feijão", "arroz", "leite"];
// let l = lista[1]
// alert(l)

// const lista = []
// lista[0] = "arroz"
// lista[1] = "feijão"
// lista[2] = "leite"

// const lista = new Array("arroz", "feijão", "leite") 
// alert(lista[2])



// Alterando valor matriz

// const lista = ["macarrão", "feijão", "arroz", "leite"];
// lista[0] = "café"
// alert(lista[0])

const pessoa = ['Beto', 'França', 30, 'casa']
console.log(pessoa.length)
console.log(pessoa[0])
// mostrar sempre o ultimo item - codigo abaixo
console.log(pessoa[pessoa.length -1])

// pessoa.push('Brasileiro') ou assim
pessoa[pessoa.length] = 'Casado'
console.log(pessoa)

// para descobrir se é um array
// alert(Array.isArray(pessoa))
