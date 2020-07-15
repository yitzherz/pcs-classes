const dow = (function dayOfWeek(){

    'use strict';

    const days =["sunday" , "monday" ,"tuesday" ,"wednesday" ,"thursday" ,"friday" , "saturday"];

        return {
            getDayName: function (num){
                return days[num - 1];
            },
            getDayNumber: function (day){
                return days.findIndex(elem => elem === day) + 1;
            }
        };
    }());


console.log(dow.getDayName(6));
console.log(dow.getDayNumber('wednesday'));
    