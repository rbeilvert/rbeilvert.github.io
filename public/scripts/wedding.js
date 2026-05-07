var map = L.map('map').setView([47.256825, -2.223079], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markergare				= L.marker([47.286429, -2.210980]).addTo(map);
var markerbusgare			= L.marker([47.285610, -2.211772]).addTo(map);
var markerbusmairie 		= L.marker([47.282663, -2.261125]).addTo(map);
var markermairieimmaculee	= L.marker([47.282762, -2.260120]).addTo(map);
var markercasinostbrevin	= L.marker([47.229502, -2.175784]).addTo(map);

markergare.bindPopup("Gare SNCF");
markerbusgare.bindPopup("Arrêt de bus \"Gare SNCF\"");
markerbusmairie.bindPopup("Arrêt de bus \"Immaculée\"");
markermairieimmaculee.bindPopup("Mairie");
markercasinostbrevin.bindPopup("Restaurant").openPopup();

/*
function initMap() {
	var labelB = {label: 'B'}
	var gare 			= {lat: 47.286429, lng: -2.210980};
	var busgare 		= {lat: 47.285610, lng: -2.211772};
	var busmairie		= {lat: 47.282663, lng: -2.261125};
	var mairieimmaculee = {lat: 47.282762, lng: -2.260120};
	var casinostbrevin	= {lat: 47.229502, lng: -2.175784};
	var mapcenter 		= {lat: 47.256825, lng: -2.223079}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12.5,
		center: mapcenter
	});
	var marker = new google.maps.Marker({
		position: gare,
		map: map
	});
	var marker = new google.maps.Marker({
		position: busgare,
		map: map
	});
	var marker = new google.maps.Marker({
		position: busmairie,
		map: map
	});
	var marker = new google.maps.Marker({
		position: mairieimmaculee,
		map: map
	});
	var marker = new google.maps.Marker({
		position: casinostbrevin,
		map: map
	});
}
*/
