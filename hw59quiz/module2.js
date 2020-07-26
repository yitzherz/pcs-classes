var app = app || {};


app.counters = (function (theModule) {

    'use strict';
    let amountCreated = 0;
    let counter = 0;
    theModule.createCounter = function () {

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






