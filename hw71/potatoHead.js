/* global $ */
(function () {

    'use strict';

    let dragging;
    let offset;
    let zindex = 0;
    let parts = [];

    $(document).on('mousedown', '.part', e => {
        console.log('mousedown', e);
        offset = { x: e.offsetX, y: e.offsetY };
        // dragging = true;
        dragging = $(e.target);
        dragging.css('zIndex', ++zindex);
    });

    $(document/*.body*/).mousemove(e => {
        if (dragging) {
            e.preventDefault(); // occasional dragging wierdness in browser...

            console.log('mousemove', e);
            //theBox.css({ top: e.pageY - offset.y, left: e.pageX - offset.x});
            dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        if (dragging) {
            console.log('mouseup', e);
            //dragging = false;
            //parts = JSON.parse(localStorage.potatoParts);
            
            parts = parts.filter(p => p.id !== dragging.attr('id'));

            parts.push({
                id: dragging.attr('id'), top: dragging.css('top'),
                left: dragging.css('left'), zindex: dragging.css('zIndex')
            });

            localStorage.potatoParts = JSON.stringify(parts);
            dragging = null;
        }
    });

    if (localStorage.potatoParts) {
        parts = JSON.parse(localStorage.potatoParts);
        parts.forEach(part => {
            $(`#${part.id}`).css({ top: part.top, left: part.left, zIndex: part.zindex });
        });
        parts.forEach(part => {
            if(zindex < part.zindex){
                zindex = part.zindex;
            }
        });
    }




}());