'use strict';

function multiply(a,b){
    return a * b;
}
console.log('multiply(2,7)', multiply(2,7));
console.log('multiply(33,7)', multiply(33,7));

function getMultiplier(){
    return function(a,b){
       return a * b;
    };
}
const multiplier = getMultiplier();
console.log('multiply(39,6)', multiplier(39,6));

function getMultiplier2(a){
    return function(b){
        return a * b;
    };
}
const multiplierBy5 = getMultiplier2(5);
console.log('multiply(5,7)', multiplierBy5(6));
