const calc = (function calculate(){

    'use strict';

    let rate;
    let numOfYears;

        return {
            calculateInterest: function (principle){
                return principle * rate * numOfYears;
            },
            setRate: function (num){
                rate = num;
            },
            setYears: function (years){
                numOfYears = years;
            }
        };
    }());

    calc.setRate(.1);
    calc.setYears(1);
console.log(calc.calculateInterest(100));
