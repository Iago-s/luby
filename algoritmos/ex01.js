// Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function newArray(length, content) {
  let array = [];
  for(let i = 0; i < length; i++) {
    array[i] = content;
  }
  console.log('New array', array);
}

newArray(3, 'a');