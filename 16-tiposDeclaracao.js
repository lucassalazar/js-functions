console.log(soma(3, 4)) // Vai funcionar pois o interpretador do javascript faz a leitura de todas as funções antecipadamente
// console.log(sub(3, 4)) // Erro, a variavel sub só é declarada na linha 11 do código
// console.log(mult(3, 4)) // Erro, a variavel mult só é declarada na linha 18 do código

// function declaration (muito comum) 
function soma (x, y) {
  return x + y;
}

// function expression (muito comum)
const sub = function (x, y) {
  return x - y
}

console.log(sub(3, 4))

// named function expression (pouco usada)
const mult = function mult(x, y) {
  return x * y
}

console.log(mult(3, 4))
