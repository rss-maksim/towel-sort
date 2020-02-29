module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
      return [];
  }
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
      let subArray = [];
      for (let j = 0; j < matrix[i].length; j++) {
          subArray.push(matrix[i][j]);
      }
      subArray = i % 2 !== 0 ? subArray.reverse() : subArray;
      result.push(...subArray);
  }
  return result;
};
