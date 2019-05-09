// O contexto léxico de uma função é o escopo onde ela foi definida
const valor = 'Global';

function minhaFuncao () {
  console.log(valor);
};

function exec() {
  const valor = 'Local';
  minhaFuncao();
};

exec();