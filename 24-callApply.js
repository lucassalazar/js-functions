// Tipos de chamada de função

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
};

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
};


global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

// Utilizando call e apply
const carro = {preco: 49990, desc: 0.2};

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$')); // Como parametro é passado o contexto (objeto), e na sequencia os demais parâmetros
console.log(getPreco.apply(carro, [0.17, '$'])); // A diferença é que apply, passa parametros dentro de um array

console.log(getPreco.apply(global, [0.5, '$'])); // Global possui valores de preco e desc
