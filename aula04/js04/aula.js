/*
   EVENTOS DE TEMPO COM JAVASCRIPT
   Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de enventos de cronometragem.
   
   Os dois métodos-chave para usar com JavaScript são:

    SetTimeOut(function, tempo em milisegundos)
   --> Executa uma função, depois de esperar um número especificado de milissegundos.

    SetInterval(function, milissegundos)
   --> É o mesmo que o SetTimeOut(), mas repete a execução 
   da função continuamente.

*/ 

function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar"

   tempo = setTimeout(function(){
        // Ativa a função uma vez quando der o tempo especificado.

        document.getElementById('tempo').innerHTML = "Executou o SetTimeout"
        // document.body.style.backgroundColor = 'blue'

    }, 5000);
}

function paraContagem(){
    clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = "Parou a contagem"
}

/* 
Para parar uma contagem é preciso colocar o Settimeout dentro de uma variavel global. tempo = setTimeout(function()...
Variavel sem Let, Var por conta do escopo. 
para pegar em outra function.

*/