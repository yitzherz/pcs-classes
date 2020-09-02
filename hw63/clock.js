(function(){

    'use strict';

    const clock = document.createElement('div');
    document.body.appendChild(clock);
       //const clock = document.getElementById('clock');
        setInterval(() => {
          let d = new Date();
          clock.innerHTML = d.toLocaleTimeString();
        }, 1000);
     
}());