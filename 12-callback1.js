const fabricantes = ["Mercedes", 'Audi', "BMW"]

function imprimir (nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}


// A função forEach chama uma callback para cada um dos elementos do array

fabricantes.forEach(imprimir) // Para cada valor do array, será chamado um callback
fabricantes.forEach(function(a) {
  console.log(a)
})
fabricantes.forEach((fabricante, indice) => console.log(`${indice} - ${fabricante}`))

// Padrão Observer - Event Handler

// Analogia do aniversário surpresa
// Enquanto a resposta da requisição não chega, a pagina web fica livre para fazer outras atividades de carregamento