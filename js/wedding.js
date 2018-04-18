
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