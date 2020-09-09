/* globals $ */
(function () {
    'use strict';

    const loadButton = $('#loadButton');
    const fileInput = $('#fileinput');

    loadButton.click(event => {
        event.preventDefault();
        const ur = fileInput.val();
        fetch(`${ur}`)
            .then(r => r.text())
            .then(text => console.log(text))
            .catch(() => window.pcs.messageBox.show('Invalid url!'));

    });
}());