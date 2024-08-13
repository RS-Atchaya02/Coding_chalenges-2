function Exists(arr, num) {
  return arr.includes(num);
}
const numbers = [22,3,14,78,4];
const result = Exists(numbers, 24);
console.log(result); 

const result2 = Exists(numbers, 3); 
console.log(result2);    // false , true 
