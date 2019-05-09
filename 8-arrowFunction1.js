let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // Retorno implícito
console.log(dobro(Math.PI))

let ola = function() {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possuí um param
console.log(ola())