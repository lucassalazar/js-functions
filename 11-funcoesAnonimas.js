const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function(a, b, operacao = soma) { // Soma é o parametro default
  console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
  return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) // Uma função arrow sempre será anônima

const pessoa = {
  falar: function() { // Pode-se utilizar também apenas falar() { console.log('Opa') }
    console.log('Opa')
  }
}

pessoa.falar()