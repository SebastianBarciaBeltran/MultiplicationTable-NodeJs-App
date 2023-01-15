
const { createTableFyle } = require('./helpers/multiplicationTable');
const  argv  = require('./config/yargs');

require('colors');


console.clear();


createTableFyle(argv.b, argv.l, argv.u)
    .then( fileName => console.log(fileName.green, 'created'))
    .catch( err => console.log(err))
