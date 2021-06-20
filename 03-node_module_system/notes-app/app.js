const getNotes = require('./notes.js');
const chalk = require('chalk');

const notesMsg = getNotes();

console.log(chalk.red.bold.italic(notesMsg));
console.log(chalk.keyword('green')(notesMsg));
console.log(chalk.keyword('lightgreen').underline('great success!'));
console.log(
	chalk.inverse('woah im inversed woah', chalk.bgBlueBright('H.T.B'))
);
console.log(chalk.bgCyanBright.black('black panther'));
console.log(chalk.hex('#BADA55').bold('BADASS😎!'));
console.log(chalk.rgb(123, 45, 67)('reddish color'));
console.log(chalk.green.inverse('reddish color'));

const pinkMsg = chalk.bgKeyword('pink').black('puhanic');
console.log(pinkMsg);
