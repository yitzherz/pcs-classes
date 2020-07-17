var myApp = myApp || {};

myApp.utils = (function(theModule){
    'use strict';

    const days =["sunday" , "monday" ,"tuesday" ,"wednesday" ,"thursday" ,"friday" , "saturday"];

    theModule.getDayName = num => days[num - 1];
    theModule.getDayNumber =  day => days.findIndex(elem => elem === day) + 1;  
          
    return theModule;
    
}(myApp.utils || {}));