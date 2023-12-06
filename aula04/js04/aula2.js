/*
   EVENTOS DE TEMPO COM JAVASCRIPT
   Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de enventos de cronometragem.

    SetInterval(function, milissegundos)
   --> É o mesmo que o SetTimeOut(), mas repete a execução 
   da função continuamente.

*/ 

function ativarContagem(){
  
   tempo = setInterval(() => {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = Number(cronometro) - 1

        if(soma === 0){
            document.getElementById('tempo').innerHTML = "Tempo esgotado"
            paraContagem()
        }else{
            document.getElementById("tempo").innerHTML = soma
        }


    }, 1000);

}

function paraContagem(){
    clearInterval(tempo)
    // document.getElementById('tempo').innerHTML = "Parou a contagem"
}

/* 
Para parar uma contagem é preciso colocar o Settimeout dentro de uma variavel global. tempo = setTimeout(function()...
Variavel sem Let, Var por conta do escopo. 
para pegar em outra function.

*/