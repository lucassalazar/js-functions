// Utilizando a função na forma padrão o this pode variar

// Quando se utiliza a função arrow, o this é definido no contexto da função de forma a não variar
// O this fica limitado ao contexto lexico, contexto da função

// Exemplos:

// function f1() { console.log(this === window) }
// f1() // True

// document.getElementsByTagName('body')[0].onclick = f1 // false

// function f2() {console.log(this === document) }
// f2() // False
// document.getElementsByTagName('body')[0].onclick = f1 // false

// const body = document.getElementsByTagName('body')[0]
// function f2() {console.log(this === body) }
// document.getElementsByTagName('body')[0].onclick = f2 // true
// f2() // false

// const f3 = () => console.log(this === window) // Como a arrow function foi definida dentro
// do escopo global, o this representa o window.
// O this de uma arrow function esta relacionado ao contexto onde esta foi definida (this léxico, contexto léxico)


// f3() //true
// document.getElementsByTagName('body')[0].onclick = f3 // true

// Quando se cria uma função utilizando a forma tradicional com a palavra
// reservada "function", o this pode variar de acordo com quem chamou a função

// Utilizando arrow function o this não varia nunca