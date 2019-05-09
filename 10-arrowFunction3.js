let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // this agora aponta para obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// O conceito de this dentro de uma arrow function é restrito dentro dela, mesmo utilizando o bind o this da função não se altera
comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj) // false

// true visto que o this da função arrow, é restrito ao módulo no qual pertence
comparaComThisArrow(module.exports) 
