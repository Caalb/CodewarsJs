const deleteNth = (arr, nth) => {
  const result = []; 
  
  for (let i = 0; i < arr.length; i++) {
    if(result.filter(item => item === arr[i]).length < nth) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log(deleteNth([20,37,20,21], 1))