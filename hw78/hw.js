(function () {
    'use strict';

    const printButton = $('#print');
    const printElem = $('#output');
    let times = 0;
    printButton.click(() => {
        printElem.text(`button was clicked ${++times} times`);
    });
}());