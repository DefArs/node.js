//Para el funcionamiento en la terminal introduzca "node index.js" -nombre de la operacion a realizar- -numero 1- -numero 2-
//ejemplo: node index.js sum 1 2

const add = require("./sum.js");
const subtraction = require("./subtract.js");
const multiply = require("./multiplication.js");
const divide = require("./division.js");
const readline = require("readline");

let operation = process.argv[2];
let num1 = parseFloat(process.argv[3]);
let num2 = parseFloat(process.argv[4]);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Hello! What operation do you wish to perform?",
  operation,
  num1,
  num2
);

const operations = {
  sum: add,
  subtract: subtraction,
  multiplication: multiply,
  division: divide,
};

if (!operations.hasOwnProperty(operation)) {
  console.log("Please enter an operation");
  return;
}

let result = operations[operation](num1, num2);

console.log("The result of the", operation, "operation is:", result);
