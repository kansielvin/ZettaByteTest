// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  var result1 = Math.max(...arr2) < Math.max(...arr1);
  var result2 = Math.min(...arr2) < Math.min(...arr1);
  return [result1, result2]
  const res = [];
}

console.log(result(arr1, arr2));