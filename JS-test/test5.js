// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  var count = 0;
    while (num > 0){
        count = count + 1
        num = num & (num-1)}
    return count;
}

console.log(result(number));