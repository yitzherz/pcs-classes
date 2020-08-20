var app = app || {};


app.counters = (function (theModule) {

    'use strict';
    let amountCreated = 0;
    let counter = 0;
    theModule.createCounter = function () {
        // SL - ok, but counter and amount created arent private
        // they can be changed - app.counters.createCounter().counter = 5000...
        // amountCreated should be local variable in outer function and counter a local variable
        // in this function, just like you did in module.js...
        return {
            counter: counter,
            amountCreated: amountCreated++,
            incrementCount: function () {
                this.counter++;
            },
            getCount: function () {
                return this.counter;
            },
            getAmountCreated: function () {
                return amountCreated;
            }

        };
    };
    return theModule;
}(app.counters || {}));






