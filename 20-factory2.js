// Minha solução
function criarProduto (nome, preco) {
  const desconto = 0.2;
  return {
    nome: nome,
    preco: preco - (preco * desconto)
  };
};

let notebook = criarProduto('Notebook', 3000);
console.log(notebook);

// Solução do curso
function criarProduto1 (nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  };
};

console.log(criarProduto1('iPad', 1199.99));