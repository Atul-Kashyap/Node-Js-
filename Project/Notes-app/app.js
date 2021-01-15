// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'My Name is Atul!');
// fs.appendFileSync('notes.txt', 'I am learning Node.js!');

// const firstName = require('./utils.js')
// console.log(firstName);

// const add = require('./utils.js');

// const sum = add(4, 5);
// console.log(sum);


const getNotes = require('./notes');
const msg = getNotes("File system module");

console.log(msg);