// Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function removeInternArray(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'object') {
      let internArray = array[i];
  
      for(let j = 0; j < internArray.length; j++) {
        newArray[newArray.length] = internArray[j];
      }
    } else {
      newArray[newArray.length] = array[i];
    }
  }
  
  console.log(newArray);
}

removeInternArray([1, 2, [3], [4, 5]]);