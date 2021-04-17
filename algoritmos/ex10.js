// Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function equalValuesInArray(array1, array2) {
  let equalValues = [];
  
  for(let i = 0; i < array1.length; i++) {
    for(let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) {
        equalValues.push(array1[i]);
      }
    }
  }

  console.log('Valores iguais', equalValues);
}

equalValuesInArray([6, 8], [8, 9]);