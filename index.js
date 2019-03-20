const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

var arr = [1, 1, 2, 2, 3, 5]
 
require("uniq")(arr)
console.log(chalk.blue(arr))