/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice 
más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca 
primero en la lista. Si no hay números repetidos, devuelve -1.
*/

function findFirstRepeated(gifts) {

  const giftsIds = {}
  
  for(let i = 0; i < gifts.length; i++){
    const gift = gifts[i]
    if(!giftsIds[gift]){
      giftsIds[gift] = 1
      continue
    }
  
    return gift
  }
  
  return -1
}