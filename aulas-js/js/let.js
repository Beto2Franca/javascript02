/*
let - Não pode ser redeclarada. torna unica. O let vai obedecer o bloco que ele tá trabalhando.
EX: let pessoa = "Joao"
Let pessoa = "Beto" 
Ira dar erro de sintaxe. irá mostrar que a variavel pessoa já foi declarada.
Se fosse Var iria mostrar o ultimo. Beto

let fica mais seguro.
Para não ter repeticões de variaveis.
*/

let x = 10 

{
    let x = 2;

}

console.log(x)