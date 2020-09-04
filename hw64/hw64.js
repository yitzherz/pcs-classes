/* global $ */
(function () {

    'use strict';
    let isChecked = false;

    $('button').click((event) => {
        event.preventDefault();
        console.log('hello');
        let first = $('#first').val();
        let address = $('#address').val();
        $("p").text(`first name is ${first} address is  ${address}`);
    });

    $('#checkbox').click(() => {
        
        $('button').prop('disabled', isChecked);
    });

}());