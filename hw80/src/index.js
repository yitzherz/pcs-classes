import $ from 'jquery';
import css from './index.css';
import apple from './apple.png';
(function () {
    'use strict';

    const printButton = $('#print');
    const printElem = $('#output');
    let times = 0;

    const appleImg = new Image();
    appleImg.src = apple;
    printElem.append(appleImg);
    printButton.click(() => {
        printElem.text(`button was clicked ${++times} times`)
        .append(appleImg);
    });
}());