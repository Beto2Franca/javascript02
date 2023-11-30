/* 
    Funções
     é uma bloco de código projetado para executar uma tarefa especifica.
     
     É como uma pequena "Frabrica" onde você faz uma entrada e ele te da uma saida.

     Pode ser encarado como mini-programas projetados para fazer uma tarefa que vai contribuir para todo código.

     Uma função JavaScript é executada quando "algo"a invoca(chama-a).

*/ 

// function soma(valor1, valor2){
//     return valor1 + valor2
// }
// document.getElementById("texto").innerHTML = soma(11,20)


// function realParaDolar(real, cotacaoDolar){
//     return real * cotacaoDolar
// }
// var valorReal = 15.89
// var cotacao = 5.08

// var total = realParaDolar(valorReal, cotacao)
 
// alert("O valor em real é R$: "+ valorReal + " o valor em dólar U$ é: " + total.toFixed(2));

function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}

var o = paraCelsius(77);

// alert("A temperatura é de " + o + " graus celsius")