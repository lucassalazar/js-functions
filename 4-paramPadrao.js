// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1 // Operador ternário, se a for diferente de undefined retorna a caso contrário 1
  b = 1 in arguments ? b : 1  // Dentro de arguments, existe o indice 1? se sim retorna b, caso contrario 1
  c = isNaN(c) ? 1 : c        // c is not a number? se sim retorna 1, caso contrario c
  
  return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Estratégia de valor padrão mais recente (ES2015)
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))