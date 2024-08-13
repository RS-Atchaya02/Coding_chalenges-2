function countSpaces(str) 
{
  return str.split(' ').length - 1;
}
const example1 = "Hello world, this is a test.";
const example2 = "NoSpacesHere";
console.log(countSpaces(example1));    // 5
console.log(countSpaces(example2));   // 0
