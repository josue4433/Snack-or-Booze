function unroll(square) {
    const result = [];
    let topRow = 0;
    let bottomRow = square.length - 1;
    let leftCol = 0;
    let rightCol = square.length - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse top row from left to right
      for (let col = leftCol; col <= rightCol; col++) {
        result.push(square[topRow][col]);
      }
      topRow++;
  
      // Traverse right column from top to bottom
      for (let row = topRow; row <= bottomRow; row++) {
        result.push(square[row][rightCol]);
      }
      rightCol--;
  
      // Traverse bottom row from right to left
      if (topRow <= bottomRow) {
        for (let col = rightCol; col >= leftCol; col--) {
          result.push(square[bottomRow][col]);
        }
        bottomRow--;
      }
  
      // Traverse left column from bottom to top
      if (leftCol <= rightCol) {
        for (let row = bottomRow; row >= topRow; row--) {
          result.push(square[row][leftCol]);
        }
        leftCol++;
      }
    }
  
    return result;
  }
  