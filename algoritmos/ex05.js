// Implemente um método que retorne um array, sem os itens passados por 
// parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3),
// Resultado do método: [4,2]

function removeItemArray(array, item1, item2) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== item1 && array[i] !== item2) {
      newArray[newArray.length] = array[i];
    }
  }

  console.log('New array', newArray);
}

removeItemArray([5, 4, 3, 2, 5], 5, 3);