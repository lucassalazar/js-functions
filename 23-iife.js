// IIFE -> Immediately Invoked Function Expression | Função auto-invocada

// Não toca o escopo global

(function () {
  // Tudo o que for definido dentro da função estará fora do escopo global
  console.log('Será executado na hora!');
  console.log('Foge do escopo mais abrangente!'); // O escopo da função se limita a ela, e não onde foi declarada
})();