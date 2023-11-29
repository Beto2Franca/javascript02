# javascript02
 javascript 

 Basic

 - Remainder ( resto %)
 remainder = 11 % 3 ; 
 O operador resto é frequentemente usado para determinar se um número é par ou impar.

 - Atribuição composta com adicão aumentada
 (compound assignment with augmented addition)

 var a = 3
 var b = 17
 var c = 12

 a = a + 12  - a += 12
 b = 9 + b   - b += 9
 c = c + 7   - c += 7

 - Atribuição composta com Subtração aumentada
 (compound assignment with augmented subtraction)

var a = 11

a = a - 6   -  a -= 6

- Atribuição composta com Multiplicação aumentada
a *= 5

divisão
a /= 12

- Declare String Variables

var fristName = "Alan"

- Escapando de citações literais em Strings

- VAR, LET, CONST

var - pode reatribuir valores var a = 5.. var a = 6 (fica valendo o ultimo)


let - Não pode ser redeclarada. ( só é atribuido uma vez) torna unica. O let vai obedecer o bloco que ele tá trabalhando.
EX: let pessoa = "Joao"
Let pessoa = "Beto" 
Ira dar erro de sintaxe. irá mostrar que a variavel pessoa já foi declarada.
Se fosse Var iria mostrar o ultimo. Beto


const - constante, Nunca pode mudar. Não obedece mudança em lugar nenhum.

-----


- Operadores

-> São usados para atribuir valores, comparar valores, executar operações aritméticas, etc.

Os sinais que usamos: + - * / = ++ -- -= && || etc

São separados em 6 categorias: 
1 - Operadores aritméticos (matemáticos)
2- Operadores de atribuição
3 - Operadores de sequência

    valor1 = "Dimitri"
    valor2 = "Teixeira"
    total = valor1 + valor2 (concatenação)

4 - Operadoresde comparação 

    ex:
    var valor1, valor1, total
    valor1 = 8
    valor2 = 10
    total = (valor1 == valor2)

5 - Operadores condicional (Ternário)

    var idade, eleitor
    idade = 17
    eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor"
    alert('eleitor')

6 - Operadores lógicos  
(quando precisa fazer mais de uma condição)

    var idade, eleitor, resultado
    idade = 17
    eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor"
    
    resultado = (idade > 60 && idade < 70)
    resultado = !(idade === 60) - diferente de 60.
