const chalk = require("chalk");

function subtract(num1, num2) {
  let result = num1 - num2;
  return chalk.yellow(result.toString());
}

module.exports = subtract;
