// Classe
class Pessoa {
  constructor(nome) {
    this.nome = nome
  };

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  };
};

const p1 = new Pessoa('Lucas');
p1.falar();
console.log(p1.nome); // Ainda se tem acesso ao atributo nome

// Funcão factory

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  };
};

const p2 = criarPessoa('Bruna');
p2.falar();
console.log(p2.nome); // Não se tem mais acesso ao atributo nome (ausência do this)