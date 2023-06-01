const chalk = require("chalk");

function multiplication(num1, num2) {
  let result = num1 * num2;
  return chalk.keyword("orange")(result.toString());
}

module.exports = multiplication;
