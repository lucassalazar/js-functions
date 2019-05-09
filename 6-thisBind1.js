const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao) // Acessando o this do Objeto
  }
}

pessoa.falar()

const falar = pessoa.falar // Esta usando um contexto diferente do contexto do objeto, logo o this é diferente
falar() // Conflito entre paradigmas: funcional e OO
// Quando chamada a função falar, o resultado é undefined
// Porque o o contexto do this dentro do objeto é diferente
// do contexto this global

const falarDePessoa = pessoa.falar.bind(pessoa) // Com o bind o this sempre será resolvido para o objeto pessoa
// O resultado de pessoa.falar.bind(pessoa) foi adicionado a variavel falarDePessoa
falarDePessoa()