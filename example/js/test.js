test("Map view model sets up map correctly", function() {
	var google = new GoogleMapsMock();

	var mapviewmodel = new MapViewModel(google);
	mapviewmodel.setup();

	equal(google.results.MapResults.id, "#test", "Correct map canvas is used");

	deepEqual(google.results.MapResults.mapOptions, {
		center: new google.maps.LatLng(-25.778176, 28.202412),
		disableDefaultUI: true,
		zoom: 8
	}, "Initial map values are correct");

	deepEqual(google.results.TrafficLayer.Map, google.results.MapResults.Map, "Correct map is set to TrafficLayer");
});