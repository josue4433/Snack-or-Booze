// Example 1
const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log(unroll(square));
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// Example 2
const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];
console.log(unroll(smallerSquare));
// Output: ["a", "b", "c", "f", "i", "h", "g", "d", "e"]


const twoByTwoSquare = [
  [1, 2],
  [3, 4]
];
console.log(unroll(twoByTwoSquare));
// Output: [1, 2, 4, 3]

const threeByThreeSquare = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(unroll(threeByThreeSquare));
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
