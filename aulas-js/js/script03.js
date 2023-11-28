/*
Variáveis são "Recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

3 palavras-chaves para declarar variaveis:
var - pode reatribuir valores var a = 5.. var a = 6 (fica valendo o ultimo)


let - Não pode ser redeclarada. ( só é atribuido uma vez) torna unica. O let vai obedecer o bloco que ele tá trabalhando.
EX: let pessoa = "Joao"
Let pessoa = "Beto" 
Ira dar erro de sintaxe. irá mostrar que a variavel pessoa já foi declarada.
Se fosse Var iria mostrar o ultimo. Beto


const - constante, Nunca pode mudar. Não obedece mudança em lugar nenhum.

*/
// var pote = "bombom"
// // alert(pote)

// Declaração de variáveis
// var a,b,c;
    var nome, sobrenome, nomecompleto, idade, soma;
// Atribuição dos valores - não é bom juntar string com number
nome = "Beto"
sobrenome = "França"
idade = 30
nomecompleto = nome + " " + sobrenome 

soma = idade + 10
pessoa = nome + " " + soma 

document.getElementById("texto").innerHTML = pessoa
// a=6
// b=5
// c = a+b
// alert(c)