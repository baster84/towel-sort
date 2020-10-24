
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined' || matrix.length == 0) 
  {
    return [];
  }
  let result = [];
  for (let i=0; i < matrix.length; i++){
    const item = matrix[i];
    if (Array.isArray(item)){
      result = result.concat(i % 2 == 0 ? item : item.reverse());
    } else {
      result.push(item);
    }
  }
  return result;
}
