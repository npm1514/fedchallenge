const colors = require('colors');

const logConsole = msg => console.log(
    colors.green('\n***************\n') +
    colors.yellow(msg) +
    colors.green('\n***************\n')
);

module.exports = logConsole;
