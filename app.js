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
		this.products = [
		{
			name: 'Topazz',
			price: 20.95,
			description: "pretty",
			canPurchase: true,
			images: [],
			reviews: [
				{
					stars: 5,
					body: "This gem crazy!",
					author: "Alex M"
				},
				{
					stars: 3,
					body: "This gem decent",
					author: "Luke C"
				}
			]
		},
		{
			name: 'Emerald',
			price: 29.0,
			description: "beautiful",
			canPurchase: true,
			images: [],
			reviews: [
				{
					stars: 5,
					body: "This gem crazy!",
					author: "Alex M"
				},
				{
					stars: 3,
					body: "This gem decent",
					author: "Luke C"
				}
			]
		}
	]; // product is a property of our Controller
	});
	app.controller('PanelController', function() { 
		this.tab = 1;
		// Initialization and Configuration should always go inside of a Controller!

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	app.controller('ReviewController', function() { 
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);//push this current review into array of reviews
			this.review = {}; // Resets the form and the live preview on Submit. 
		};
	});

	var gems = [
		{
			name: 'Topazz',
			price: 20.95,
			description: "pretty",
			canPurchase: true,
			images: [],
			reviews: [
				{
					stars: 5,
					body: "This gem crazy!",
					author: "Alex M"
				},
				{
					stars: 3,
					body: "This gem decent",
					author: "Luke C"
				}
			]
		},
		{
			name: 'Emerald',
			price: 29.0,
			description: "beautiful",
			canPurchase: true,
			images: [],
			reviews: [
				{
					stars: 5,
					body: "This gem crazy!",
					author: "Alex M"
				},
				{
					stars: 3,
					body: "This gem decent",
					author: "Luke C"
				}
			]
		}
	];

})();

/* Also, we have now wrapped our whole application in a Closure! Good habit. */


