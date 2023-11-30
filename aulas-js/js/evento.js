function eventoClick(){
    alert('opa!')
    // document.body.style.backgroundColor = 'gray'
}

function viraVermelho(){
    let div = document.getElementById("teste")
    div.style.backgroundColor = 'red'
}
function viraAzul(){
    let div = document.getElementById("teste")
    div.style.backgroundColor = 'aqua'
}
function adicionarTexto(){
    let p = document.getElementById("texto")
    p.append('O mouse moveu')
}
function limpaTexto(){
     document.getElementById("campoTexto").value = " "
    //  campoTexto.style.backgroundColor = 'lightblue' onfocus
}