'use strict';

function myEvery(theArray, callback){
    for(let i=0; i < theArray.length; i++){
        if(!callback(theArray[i])){
            return false;
        }
    }
    return true;
}

function upperCase(x){
    if(x === x.toUpperCase()){
        return true;
    }
}

const letters = ['a', 'b', 'C', 'd', 'e', 'f', 'g'];
const letters2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const letters3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log('myEvery(letters,upperCase)',myEvery(letters,upperCase));
console.log('myEvery(letters2,upperCase)',myEvery(letters2,upperCase));
console.log('myEvery(letters3,upperCase)',myEvery(letters3,upperCase));
console.log('every(letters3,upperCase)',letters3.every(upperCase));

function upperCase(x){
    if(x === x.toUpperCase()){
        return true;
    }
}
//////////////////////////

function mySome(theArray, callback){
    for(let i=0; i < theArray.length; i++){
        if(callback(theArray[i])){
            return true;
        }
    }
    return false;
}

console.log('mySome(letters,upperCase)',mySome(letters,upperCase));
console.log('mySome(letters2,upperCase)',mySome(letters2,upperCase));
console.log('Some(letters',letters.some(upperCase));
console.log('Some(letters2',letters2.some(upperCase));

/////////////////////////

function onlyIf(theArray, test, action){
    for(let i=0; i < theArray.length; i++){
        if(test(theArray[i])){
            action(theArray[i]);
        }
    }
}
onlyIf(letters, upperCase,console.log );
onlyIf(letters2, upperCase,console.log );
onlyIf(letters3, upperCase,console.log );

/////////////////////////

function onlyIf2(theArray, test, action){
    const filtered = theArray.filter(elem => test(elem));
    filtered.forEach(elem => action(elem));
}

console.log('onlyIf2',onlyIf2(letters,upperCase,console.log));
