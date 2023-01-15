const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'it`s the number of multiplication table'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Show the table in console'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 0,
        describe: 'Show the table in console until x'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b )) {
            throw 'the base requiere a number'
        }  else if ( isNaN( argv.u )) {
            throw 'the until requiere a number'
        }
        return true
    })
    .argv;


module.exports = argv;