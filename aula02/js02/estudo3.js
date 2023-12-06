/*
    Switch
    É usado para realizar diferentes ações com base em diferenres condicões no mesmo bloco de verificação.
    Caso a condição não seja compatível não será executada e o valor padrão será acionado.

*/

function verificarCor(){
    let cor = document.getElementById("cor").value
    cor = cor.toLowerCase()

    switch (cor) {

        case "azul":
        document.body.style.backgroundColor = "blue"
        break;
        
        case "vermelho":
        document.body.style.backgroundColor = "red"
        break;

        case "amarelo":
        document.body.style.backgroundColor = "yellow"
        break;

        case "branco":
        document.body.style.backgroundColor = "white"
        break;

        default:
        document.getElementById("testecor").innerHTML = "Nenhuma cor disponivel para: " + cor    


    }

}

