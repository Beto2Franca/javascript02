const carros = ["GOl", "Fusca", "Brasilia", "Del Rey", "Uno", "Bike", "Patins"]

var tamanho = carros.length

for(let i = 0; i<tamanho;i++){
    document.getElementById("teste02").innerHTML +=carros[i]+ " - "
}
