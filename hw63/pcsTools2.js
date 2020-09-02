window.pcs = function (id) {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }
 


  //homework
  function getColorPart() {
    return Math.floor(Math.random() * 256);
  }
  function getRandomColor() {
    const r = getColorPart();
    const g = getColorPart();
    const b = getColorPart();

    return `rgb(${r},${g},${b})`;

  }
  let interval;

  function changeColors(element, lengthOfFlashing, speed) {
    interval = setInterval(() => {

      setCss(element, 'color', getRandomColor());
      setTimeout(() => clearInterval(interval), lengthOfFlashing);
      
    }, speed);
  }

  const theElem = get(id);

  return {
    /*setCss: (property, value) => setCss(theElem, property, value),
    getCss: property => getCss(theElem, property),*/
    css: function (property, value) {
      if (arguments.length < 2) { // get
        return getCss(theElem, property);
      }
      setCss(theElem, property, value);
      return this;
    },
    click: function (callback) {
      theElem.addEventListener('click', callback);
      return this;
    },
    hide: function () {
      setCss(theElem, 'display', 'none');
      return this;
    },
    show: function () {
      setCss(theElem, 'display', 'block');
      return this;
    },
    changeColors:function changeColor(lengthOfFlashing, speed){
      changeColors(theElem, lengthOfFlashing, speed);
    }
  };
};