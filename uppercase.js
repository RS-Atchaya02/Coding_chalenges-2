function Uppercase(str) {
  return /[A-Z]/.test(str);
}
const example1 = "Hello, World!";
const example2 = "hello, world";
console.log(Uppercase(example1));  // true
console.log(Uppercase(example2));  // false

