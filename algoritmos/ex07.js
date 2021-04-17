// Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function equalArrays(array1, array2) {
  let counter = 0;
  if(array1.length !== array2.length) {
    return false;
  }
  
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] === array2[i]) {
      counter++
    }
  }

  if(counter === array1.length) {
    return true;
  }

  return false;
}

console.log('São iguais?:', equalArrays([1, 2, 3, 4], [1, 2, 3, 4]));