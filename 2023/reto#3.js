function findNaughtyStep(original, modified) {
  
  const originalLength = original.length
  const modifiedLength = modified.length
  
  if(originalLength >= modifiedLength){
    for(let i = 0; i < modifiedLength; i++){
      if(original[i] !== modified[i]){
        return original[i]
      }
    }
  
    if(originalLength === modifiedLength){
      return ''
    }
    return original[modifiedLength]
  }
  
  for(let i = 0; i < originalLength; i++){
    if(original[i] !== modified[i]){
      return modified[i]
    }
  }
  return modified[originalLength]
}