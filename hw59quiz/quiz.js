(function () {
    'use strict';

    function multiplyMap(theArray, callback) {
        let newArray = [];
        for (let i = 0; i < theArray.length; i++) {
            newArray[i] = callback(theArray[i]);
        }
        return newArray;
    }

    
    function multiplyBy2(a) {
        return a * 2;
    }
    let nums = [2, 4, 6];

    console.log(nums);
    let result = multiplyMap(nums, multiplyBy2);

    console.log(result);

}());