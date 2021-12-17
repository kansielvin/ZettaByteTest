// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  let newArr = [];
  let uniqueArray = arr2.filter(function(item) { return arr1.indexOf(item) === -1; })
  for (let i = 0; i < uniqueArray.length; i++) {
    
    if ( uniqueArray[i] % 2 == 0) {
    newArr.push(uniqueArray[i]);
  }else{
    newArr.unshift(uniqueArray[i]);}}

	newArr.splice(2,0,...arr1)
 
  return newArr;
}

console.log(result(arr1, arr2));