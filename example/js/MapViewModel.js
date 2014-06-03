function MapViewModel(google) {
	var self = this,
		mapElement = "#test", // select actual map element
		directionsDisplay,
		trafficLayer,
		map;

	self.setup = function()  {
		var mapOptions = {
			center: new google.maps.LatLng(-25.778176, 28.202412),
			zoom: 8,
			disableDefaultUI: true
		};

		map = new google.maps.Map(mapElement, mapOptions);
		trafficLayer = new google.maps.TrafficLayer();
		trafficLayer.setMap(map);
	}
}