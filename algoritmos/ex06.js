// mplemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function uniqueValues(array) {
  let newArray = [];
  let position = 0;

  for(let i = 0; i < array.length; i++) {
    if(i === 0) {
      newArray[position] = array[i];
      position++;
    } else {
      let exist = false;
      for(let j = 0; j < position; j++) {
        if(array[i] === newArray[j]) {
          exist = true;
        }
      }
      if(exist === false) {
        newArray[position] = array[i];
        position++;
      }
    }
  }

  console.log('NewArray ', newArray);
}

uniqueValues([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);