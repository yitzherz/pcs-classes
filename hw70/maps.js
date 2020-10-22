/* global google */
window.initMap = function () {

    'use strict';

    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const markers = [];

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        if (event.type === 'marker') {
            console.log(event.overlay.position.lat(), event.overlay.position.lng());



            //localStorage.marker = JSON.stringify({ lat: event.overlay.position.lat(), lng: event.overlay.position.lng()});

            //localStorage.marker = JSON.stringify(event.overlay.position);

            markers.push(event.overlay.position);
            localStorage.markers = JSON.stringify(markers);
        } // else if circle do circle code
    });
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event, 'event');
        switch (event.type) {
            case 'rectangle':
                localStorage.rectangle = JSON.stringify(event.overlay.bounds);
                console.log(event, 'event');
                break;
            case 'circle':
                localStorage.circle = JSON.stringify({ center: event.overlay.center, radius: event.overlay.radius });
                console.log(event, 'circle');
                break;
            case 'polyline':
                localStorage.polyline = JSON.stringify(event.overlay.getPath().getArray());
                console.log(event, 'poly');
                break;
            case 'polygon':
                localStorage.polygon = JSON.stringify(event.overlay.getPath().getArray());
                console.log(event);
                break;
            default:
        }
    });

    /*if (localStorage.marker) {
      new google.maps.Marker({
        position: JSON.parse(localStorage.marker),
        map: map,
        animation: google.maps.Animation.DROP
      });
    }*/

    if (localStorage.circle) {
        const c = JSON.parse(localStorage.circle);
        new google.maps.Circle({
            map: map,
            center: c.center,
            radius: c.radius
        });
    }

    if (localStorage.rectangle) {
        const r = JSON.parse(localStorage.rectangle);
        new google.maps.Rectangle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map,
            bounds: r
        });
    }

    if (localStorage.polyline) {
        const p = JSON.parse(localStorage.polyline);
        console.log(p);
        new google.maps.Polyline({
            path: p,
            map: map
        });
    }

    if (localStorage.polygon) {
        const p = JSON.parse(localStorage.polygon);
        console.log(p);
        new google.maps.Polygon({
            paths: p,
            map: map
        });
    }

    if (localStorage.markers) {
        const m = JSON.parse(localStorage.markers);
        m.forEach(pos => {
            new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }
};