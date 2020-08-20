// SL - nice
(function () {
    'use strict';

    function multiplyMap(theArray, callback) {
        let newArray = [];
        for (let i = 0; i < theArray.length; i++) {
            newArray[i] = callback(theArray[i]);
        }
        return newArray;
    }

    // SL - not a problem, but perfect opportunity for an arrow function, so much less code
    //let result = multiplyMap(nums, x => x * 2)
    function multiplyBy2(a) {
        return a * 2;
    }
    let nums = [2, 4, 6];

    console.log(nums);
    let result = multiplyMap(nums, multiplyBy2);

    console.log(result);

}());