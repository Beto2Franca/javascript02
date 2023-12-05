/*
Laço de Repetição For
Laços oferecem um jeito fácil e rápido de executar uma ação 
repetidas vezes.

for (let i =0; i < 101; i++){
    document.getElementById("teste").innerHTML += i + ", " 
}

*/

// for(let i=1900; i < 2021; i++){
//     document.getElementById("ano").innerHTML +="<option value='"+i+"'>" + i + "</option>"
// }

let ano = new Date().getFullYear()

for(let i=ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML +="<option value='"+i+"'>" + i + "</option>"
}

