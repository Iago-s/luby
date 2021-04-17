// Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function invertArray(array) {
  let newArray = [];
  for(let i = (array.length - 1), j = 0; i >= 0; i--, j++) {
    newArray[j] = array[i];
  }
  console.log('Array: ', array);
  console.log('New array', newArray);
}

invertArray([1, 2, 3, 4]);