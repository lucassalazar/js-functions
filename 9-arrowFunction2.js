function Pessoa() {
  this.idade = 0;
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa;




// function Pessoa() {
//   this.idade = 0
//   setInterval(function() { // this não varia quando se utiliza arrow function
//     this.idade++
//     console.log(this.idade)
//   }.bind(this), 1000)
// }

// new Pessoa
