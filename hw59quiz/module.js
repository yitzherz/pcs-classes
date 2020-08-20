// SL - nice
var app = app || {};


app.counters = (function (theModule) {
    'use strict';
    let counter = 0;

    theModule.incrementCount = () => counter++;


    theModule.getCount = () => counter;



    return theModule;

}(app.counters || {}));





