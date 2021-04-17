// Implemente um método que a partir de um array de arrays, converta em um 
// objeto com chave e valor. Entrada do método ([["c",2],["d",4]]), Resultado 
// do métdodo: {c:2, d:4}

function keyValue(array) {
  const newObject = Object.fromEntries(array);

  console.log('New object ', newObject);
}

keyValue([["c", 2], ["d", 4]]);