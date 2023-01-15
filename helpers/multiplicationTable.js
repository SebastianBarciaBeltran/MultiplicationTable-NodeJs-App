
const fs = require('fs')
const colors = require('colors');

const createTableFyle = async( num = 0, list = false, until = 0 ) => {
    try {  
        let out = ''; 
        let showInConsole = ''; 
    
        for (let i = 1; i <= until; i++) {
            out += (`${num} x ${i} = ${num * i}\n`);
            showInConsole += (`${num} ${'x'.green} ${i} ${'='.green} ${num * i}\n`);
        }  
        
        if (list) {
            console.log('================='.green);
            console.log('Table of '.green + colors.blue(num));
            console.log('================='.green);
            console.log(showInConsole);
        } 

        fs.writeFileSync(`./newFiles/MultiplicationTable-${num}.txt`, out);
        // fs.writeFileSync(`table-${num}.txt`, out);
        
        return `Table of ${num}`;

    } catch (error) {
        throw error
    }
              
}

module.exports = {
    createTableFyle
}