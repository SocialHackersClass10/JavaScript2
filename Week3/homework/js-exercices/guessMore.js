// Snippet
var x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
1-"x" is a primitif value, it will not change when we use it in argument of the function. when "f1" receive the argument,
 make a new memory in the computer keep there the value of argument and modifi that value in the new memory. 
 the new memory will be free when "f1" finish to execute. the console.log(x) will display 9.
 2-"y" is not a primitif value, it will change when we use it in argument of the function. when "f2" receive the argument,
 the parameter point at the same memory than the argument and modifi that value in the memory. 
 the value of the memory of argument will be change when "f2" finish to execute. the console.log(x) will display x:10.
