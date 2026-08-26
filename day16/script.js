let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrix2 = [
  [2, 3, 4],
  [4, 5, 6],
  [6, 7, 8],
];

function add(matrix1 , matrix2){
  const result = [];

  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2.length; j++) {
    result[i][j]= matrix1[i][j]+matrix2[i][j];
  }
  }
 

  console.log(result) ;
};
add (matrix1 , matrix2);

