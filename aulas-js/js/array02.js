// const pessoa = ["Dimitri", "Teixeira", 30, "Professor"];
// pessoa.splice(1,0, "Item novo")
// document.getElementById("teste").innerHTML = pessoa.join(" - ");

/* .pop() - Remove o ultimo item da matriz. 
para adicionar .push("...")
remover o primeiro item - .shift()
adicionar primeiro no item .unshift("..")

outra opção para deletar e escolher a opção:
delete pessoa[0] - mas dessa forma ele deleta mas não muda a posição. como se o primeiro ainda tivesse lá.
 ["undefined", "Teixeira", 30, "Professor"];

 para adicionar e escolher a posição:
 pessoa.splice(1,0, "Item novo")
 ele adicionou na posição 1 e o 0 significa que não retirou nenhum.

 Concatenação array
 */

//  const lista1 = ["Arroz", "Feijão", "Leita"]
//  const lista2 = ["Lanche", "Suco", "Agua"]
//  const lista3 = ["Salgadinho"]
 
//  const superLista = lista1.concat(lista2, lista3)

//  document.getElementById("teste").innerHTML = superLista

// Fatiar Array

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Cristiano", "Vampeta", "Dimitri"]
const craques = jogadores.slice(2,6)

document.getElementById("teste").innerHTML = craques
