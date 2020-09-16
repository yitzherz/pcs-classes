/* global $ */
(function () {
    'use strict';

    const videoListElem = $('ul');

    fetch('videos.json')
        .then(r => r.json())
        .then(videos => {
            videos.forEach(video => {
                console.log(video.title);
                $(`<li>${video.title}</li>`).appendTo(videoListElem)
                    .append(`<img src="${video.image}">`)
                .click(() => {
                    $('video').attr('src', video.url);
                    $('video')[0].play();
                   
                    
                });
                
            });
            $('img').css('padding-left', '2em');
            $('li').css('listStyle', 'none');
            $('li').css('width', '5em');
            $('li').css('padding', '0');

        })
        .catch(err => console.error(err));
}());