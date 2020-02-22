mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15,
    center: [-98.4916, 29.4252]
});

var markerOptions = {
    color: '#ff0000',
    draggable: true
}

var thaiVegan = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4916, 29.4260])
//     .setPopup(popup)
// popup.addTo(map)
    .addTo(map);

var tacoCabana = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4896, 29.4268])
//     .setPopup(popup)
// popup.addTo(map)
    .addTo(map);

var burgerKing = new mapboxgl.Marker(markerOptions)
    .setLngLat([-95.4916, 27.4260])
//     .setPopup(popup)
// popup.addTo(map)
    .addTo(map);


var thaiPopup = new mapboxgl.Popup()
    .setHTML('<h1>Thai Vegan</h1>')
    .addTo(map);

thaiVegan.setPopup(thaiPopup);

var tcPopup = new mapboxgl.Popup()
    .setHTML('<h1>Taco Cabana</h1>')
    .addTo(map);

tacoCabana.setPopup(tcPopup);

var bkPopup = new mapboxgl.Popup()
    .setHTML('<h1>Burger King Island</h1>')
    .addTo(map);

burgerKing.setPopup(bkPopup);