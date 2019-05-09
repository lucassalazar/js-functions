// Closure, o fechamento que envolve alguma coisa
// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação!

// A função tem memória de onde ela foi declarada, ou seja, quando se executa uma função o contexto é conhecido
// Uma função em javascript é um closure

const x = 'Global';

function fora() {
  const x = 'Local';
  function dentro() {
    return x;
  };
  return dentro;
};

const minhaFuncao = fora();
console.log(minhaFuncao());