/*
Em muitos casos a criação de vários objetos pode não ser a melhor opção.

const prod1 = {
  nome: '...',
  preco: 45
};

const prod2 = {
  nome: '...',
  preco: 123
};
...
...
*/

// Função factory, é uma função que retorna um objeto
function criarPessoa() {
  return { // Retorna um objeto
    nome: 'Ana',
    sobrenome: 'Silva'
  };
};

console.log(criarPessoa());