const chalk = require("chalk");

function sum(num1, num2) {
  let result = num1 + num2;
  return chalk.red(result.toString());
}

module.exports = sum;
