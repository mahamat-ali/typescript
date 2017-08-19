var a = 10;
var b = 20;

console.log(`a value before: ${a}`);
console.log(`b value before: ${b}`);

// var temp = a;
// a = b;
// b = temp;
[a, b] = [b, a];
console.log('-------------------');
console.log(`a value after: ${a}`);
console.log(`b value after: ${b}`);
