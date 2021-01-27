const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', getData);


function getData(err, data){
    console.log(data.split('\n').length - 1);
}