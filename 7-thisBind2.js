// Outra maneira de utilizar o this de um contexto em outro
// Cria-se uma variavel (self) que recebe o valor de this 
function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++ //this.idade
    console.log(self.idade) //this.idade
  }/*.bind(this)*/, 1000)
}

new Pessoa