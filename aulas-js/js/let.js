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
/*
 var valor1, valor2, total;
 
 valor1 = 5
 valor2 = 2

 total = ++valor1
 alert('o valor ficou: ' +valor1)
*/

// atribuição

// valor1 += valor2 
// valor1 = valor1 + valor2



var idade, eleitor
idade = 18
eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor"
alert(eleitor)