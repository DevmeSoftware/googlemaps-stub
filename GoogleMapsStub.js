function GoogleMapsMock() {
	var self = this;

	this.results = {
		MapResults: {},
		DirectionsService: {},
		DirectionsRenderer: {},
		TrafficLayer: {},
		event: {
			Listeners: []
		},
		Autocomplete: []
	},
	this.maps = {
		Map: function(id, mapOptions) {
			this.controls = {
				BOTTOM_CENTER: [],
				TOP_CENTER: [],
				TOP_LEFT: []	
			};
			self.results.MapResults.mapOptions = mapOptions;
			self.results.MapResults.id = id;
			self.results.MapResults.Map = this;
		},
		DirectionsService: function() {
			self.results.DirectionsService.isSetup = true;

			this.route = function(request, done) {
				self.results.DirectionsService.request = request;
				done({request: request}, "OK");
			}
		},
		DirectionsRenderer: function(options) {
			self.results.DirectionsRenderer.options = options;

			this.setDirections = function(directions) {
				self.results.DirectionsRenderer.directions = directions;
			}

			this.setMap = function(map) {
				self.results.DirectionsRenderer.map = map;
			}
		},
		TrafficLayer: function() {
			this.setMap = function(map) {
				self.results.TrafficLayer.Map = map;
			}
		},
		LatLng: function(lat, lng) {
			this.lat = lat;
			this.lng = lng;
		},
		event: {
			addListener: function(control, event, callback) {
				self.results.event.Listeners.push({control: control, event: event});
			}
		},	
		ControlPosition: {
			BOTTOM_CENTER: "BOTTOM_CENTER",
			TOP_CENTER: "TOP_CENTER",
			TOP_LEFT: "TOP_LEFT"
		},
		TravelMode: {
			DRIVING: "DRIVING"
		},
		DirectionsStatus: {
			OK: "OK"
		},
		places: {
			Autocomplete: function(id, options) {
				self.results.Autocomplete.push({
					element: id,
					options: options
				});
			}
		}
	}
}