/* global $*/
(function () {
    'use strict';

    const choicesElem = $('#choices');


    fetch('choices.json')
        .then(r => r.json())
        .then(text => {
            console.log(text);
            text.forEach(choice => {
                choicesElem.append(`<input type="radio" name="choice" id="${choice}" value="${choice}">${choice}`);


                $(`#${choice}`).on('click' ,() => {
                    $('#picDiv').empty();
                    $('#ingredients').empty();
                    const chosen =  $('input[name=choice]:checked').val();
                    console.log(chosen);
                    fetch('recipes.json')
                        .then(r => r.json())
                        .then(r => {
                            r.forEach(item => {
                                if (item.name === chosen) {
                                    console.log(item.name);
                                    $('#picDiv').append(`<img src="images/${item.photoUrl}" alt="na"/>`);
                                    $('#ingredients').append(`the ingredients are ${item.igredients}`);
                                    return;
                                }
                        });
                });
            });
        });
});




}());