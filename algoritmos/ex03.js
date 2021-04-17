// Implemente um método que limpe os itens desnecessários de um array (false, 
// undefined, strings vazias, zero, null). Entrada do método ([1,2,'', undefined]), 
// Resultado do método: [1,2]

function cleanArray(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      newArray[newArray.length] = array[i];
    }
  }
  
  console.log('Array', array);
  console.log('NewArray', newArray);
}

cleanArray([1, 2, '', undefined]);