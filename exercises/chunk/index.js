// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunk = [];
  for (let i of array) {
    const last = chunk[chunk.length - 1];
    if (!last || last.length === size) {
      chunk.push([i]);
    } else {
      last.push(i);
    }
  }
  return chunk;
}

module.exports = chunk;

// function chunk(array, size) {
//   let chunk = [];
//   for (let i = 0; i < array.length; i += size) {
//     let subArray = [];
//     for (let j = 0; j < size; j++) {
//       if (array[i + j]) {
//         subArray[j] = array[i + j];
//       }
//     }
//     chunk.push(subArray);
//   }
//   return chunk;
// }