// Função construtora
function Pessoa (nome) {
  this.nome = nome,
  this.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
  };
};

const p1 = new Pessoa('Lucas');
p1.falar();
console.log(p1.nome); // Ainda se tem acesso ao atributo nome