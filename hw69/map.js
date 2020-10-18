/* global google */
function initMap() {

    'use strict';

    const search = $('#searchInput');

    let loc = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    const infoWindow = new google.maps.InfoWindow();

    let marker = new google.maps.Marker({
        position: loc,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'BMG'
        // icon: 'https://media-exp1.licdn.com/dms/image/C560BAQHeo1T77FjcCw/company-logo_200_200/0?e=2159024400&v=beta&t=dlX613tUCPpkqDhLmmYfn3bFn08IipBXkgVzw1z4MJw'
        // icon: {
        //   url: 'https://media-exp1.licdn.com/dms/image/C560BAQHeo1T77FjcCw/company-logo_200_200/0?e=2159024400&v=beta&t=dlX613tUCPpkqDhLmmYfn3bFn08IipBXkgVzw1z4MJw',
        //   scaledSize: new google.maps.Size(50, 50)
        //}
      });
      
    
      marker.addListener('click', () => {
        infoWindow.setContent(`
          Beth Medrash Govoha (Hebrew: בית מדרש גבוה‎, Sephardi pronunciation: Beth Midrash Gavoha. lit: "High House of Learning"; also known as Lakewood Yeshiva or BMG) is an Haredi Jewish Lithuanian yeshiva in Lakewood Township, New Jersey. It was founded by Rabbi Aaron Kotler in 1943 and is the second-largest yeshiva in the world, after Mir Yeshiva in Jerusalem.[1][2] As of 2019, it had 6,715 students, 2,748 regular and 3,967 in Kollel status.[3] The principal Rosh yeshiva since 1982 is Rabbi Malkiel Kotler. Talmud and halakha studies in the institution are carried in the form of over 200 small groups, Chaburos, which consist of several students mentored by a veteran, each pursuing its own specific curriculum with an emphasis on individual learning.
          <br>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Beth_Medrash_Govoha">more info</a>
        `);
        infoWindow.open(map, marker);
      });
    
    
    let places;
    $('#enterButton').click(() => {
        $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${search.val()}&maxRows=10&username=isaacherz&type=json`)
            .then(data => {
                console.log(data);
                $('ul').empty();
                $('#sidebar').css('display','block');
                places = data.geonames.map(place => ({
                    title: place.title, summary: place.summary,
                    wikipediaUrl: place.wikipediaUrl, lat: place.lat,
                    lng: place.lng, country: place.countryCode
                }));
                console.log(places);
                
                places.forEach(place => {
                    console.log(place.lat, place.summary);
                    loc = { lat: place.lat, lng: place.lng };
                    console.log(loc);

                    marker = new google.maps.Marker({
                        position: loc,
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: place.title
                    });

                    marker.addListener('click', () => {
                        infoWindow.setContent(`
                                ${place.summary}
                              <br>
                              <a target="_blank" href="https://${place.wikipediaUrl}">more info</a>
                            `);
                        infoWindow.open(map, marker);
                    });

                    $(`<li>
                    <h3>${place.title}</h3>
                    <span>${place.summary}<span>
                  </li>`)
                  .appendTo('#sidebar ul');
                });

              
            });
    });

    
}