// A função construtora atua como uma espécie de molde, ou classe, onde a partir dela podem ser 
// criados vários objetos

function Carro (velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  // Ao declarar um atributo usando let/const ele se torna privado
  // Ao referenciar um atributo com this, ele se torna público

  // método público
  this.acelerar = function () {
    if(velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  }
  
  // método público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);