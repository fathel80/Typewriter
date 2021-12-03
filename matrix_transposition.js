let transpose = function(matrix) {   
  let rows = matrix.length, cols = matrix[0].length;   
  let newArray = [];   for (let j = 0; j < cols; j++) {     
    newArray[j] = Array(rows);   }   
    
    for (let i = 0; i < rows; i++) {     
      for (let j = 0; j < cols; j++) {       
        newArray[j][i] = matrix[i][j];     
      }   
    }   
    return newArray; }; 
    
let printMatrix = (matrix) => {   
  for (let row of matrix) {     
    for (let el of row) {       
      process.stdout.write(el + " ");     
    }     
    process.stdout.write('\n');   
  } 
}; 
printMatrix(transpose([   [1, 2, 3, 4],   [1, 2, 3, 4],   [1, 2, 3, 4],   [1, 2, 3, 4] ])); 
console.log('----'); printMatrix(transpose([   [1, 2],   [3, 4],   [5, 6] ])); console.log('----'); printMatrix(transpose([   [1, 2, 3, 4, 5, 6, 7] ]));