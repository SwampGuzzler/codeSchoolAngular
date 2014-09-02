(function() {
	var app = angular.module("store", []);
	/* Where app is the name of the application, angular references the
	Angular.js library, .module creates a new module, 'store' is the name 
	of the application, and the empty array are the app's dependencies, 
	of which there are currently none. */
	app.controller('StoreController', function() { 
	// The controller name should always be capitalized and have controller in it
	// 2nd parameter is anonymous function that will be exectuted when our 
	// StoreController is called. 
		this.product = gem; // product is a property of our Controller
	});

	var gem = {
		name: 'Topazz',
		price: 20.95,
		description: "pretty"
	};

})();

/* Also, we have now wrapped our whole application in a Closure! Good habit. */


