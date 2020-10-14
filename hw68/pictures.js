/* global $ */
(function () {
    'use strict';

    const search = $('#searchInput');
    const imagesElem = $('#pictures');
    const SearchButton = $('#enterButton');

    SearchButton.click(() => {
        $.ajax({
            url: `https://api.flickr.com/services/feeds/photos_public.gne?tags=${search.val()}&format=json&jsoncallback=?`,
            dataType: 'jsonp'
        })
            .done(pictureData => {
                console.log(pictureData);
                $('ul').empty();

                pictureData.items.forEach(picture => {
                    console.log(picture.media.m);
                    $(`<li><li/>`).appendTo(imagesElem)
                        .text(picture.title)
                        .append(`<img src="${picture.media.m}">`);

                });
            })
            .catch(err => console.error(err));
    });
}());