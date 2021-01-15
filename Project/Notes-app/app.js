// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'My Name is Atul!');
// fs.appendFileSync('notes.txt', 'I am learning Node.js!');

// const firstName = require('./utils.js')
// console.log(firstName);

// const add = require('./utils.js');

// const sum = add(4, 5);
// console.log(sum);
const chalk = require('chalk');

const validator = require('validator')

const getNotes = require('./notes');
const msg = getNotes("File system module");

// console.log(msg);

// console.log(validator.isEmail('atulkashyap1208@gmail.com'));

// console.log(validator.isEmail('atulkashyapgmail.com'));

// console.log(validator.isURL('https://www.npmjs.com/package/validator'));

console.log(chalk.green.inverse.bold('Success!'));




