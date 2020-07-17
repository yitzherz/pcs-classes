var myApp = myApp || {};

myApp.utils = (function(theModule){
    'use strict';

   
    theModule.stringCaseInsensitiveEquals = (a,b) => a.toLowerCase() === b.toLowerCase();
     
          
    return theModule;
    
}(myApp.utils || {}));