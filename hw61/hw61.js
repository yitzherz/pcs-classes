(function () {

    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    let interval;
    const theButton = get('start');

    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }
    function getRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();

        return `rgb(${r},${g},${b})`;

    }
    function startColors() {
        interval = setInterval(() => {
            const bgColor = getRandomColor();
            const color = getRandomColor();
            setCss(document.body, 'backgroundColor', bgColor);
            setCss(document.body, 'color', color);

            const time = new Date();
            const colorTable = get('rgbTable');
            const newRow = colorTable.insertRow();
            newRow.addEventListener('click', () => {
                setCss(document.body, 'backgroundColor', bgColor);
                setCss(document.body, 'color', color);
            });
            const backgroundCell = newRow.insertCell();
            const colorCell = newRow.insertCell();
            const timeCell = newRow.insertCell();

            backgroundCell.innerHTML = bgColor;
            colorCell.innerHTML = color;
            timeCell.innerHTML = time.toLocaleString();
            theButton.innerHTML = 'stop';
        }, 1000);
    }

    function stopColors() {
        clearInterval(interval);
        interval = null;
        theButton.innerHTML = 'start';
    }

    get('start').addEventListener('click', function () {
        if (!interval) {
            startColors();

        } else {
            stopColors();
        }
    });

}());