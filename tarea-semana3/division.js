const chalk = require("chalk");

function division(num1, num2) {
  let result = num1 / num2;
  return chalk.white(result.toString());
}

module.exports = division;
