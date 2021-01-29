const http = require('http');
const bl = require('bl');

const result = [];
let counter = 0;
for (let i = 2; i < 5; i++) {
    http.get(process.argv[i], res => {
        'use strict';
        res.pipe(bl((err, data) => {
            if (err) {
                return console.error(err);
            }
            result[i] = data.toString();
            counter++;
            if(counter === 3){
                result.forEach(d => console.log(d));
            }
        }));
    });
}