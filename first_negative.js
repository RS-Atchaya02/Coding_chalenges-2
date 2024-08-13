function firstnegative(arr)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] < 0) 
    {
      return arr[i];
    }
  }
  return undefined; 
}
const numbers = [14, -2, -30, 15, -11];
const FirstNegative = firstnegative(numbers); 
console.log(FirstNegative);
const allNonNegative = [42, 22, 05, 11];
const noNegative = firstnegative(allNonNegative); 
console.log(noNegative);  // -2 undefined
