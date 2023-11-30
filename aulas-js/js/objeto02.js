const livro = {
    titulo: "A erva do diabo",
    autor: "Carlos Castaneda",
    anoPublicado: 1968,
    genero: "Ficção, memórias",
    informacoes: function(){
        return `O livro do autor ${this.autor}, chamado ${this.titulo}, foi lançado em ${this.anoPublicado} com gênero ${this.genero}.`
    }
}
console.log(livro.informacoes())

