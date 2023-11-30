const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2002,
    placa: "ADB-2945",
    buzina: function (){alert('Biii')},
    completo: function (){
        return "A marca é " +this.marca + "e o modelo é: " +this.modelo + " com a placa " + this.placa
    } 
}
console.log(carro.completo())
// carro.buzina() 