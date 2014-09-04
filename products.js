(function() {
	var app = angular.module("store-products", []); // The name is random
	// & Even though we are calling both modules 'app' (like we did in 
	// the app.js file), this still works out because they are both 
	// wrapped in a closure (see line 1!).
	app.controller('StoreController', [ '$http', function($http) { 
		// DEPENDENCY INJECTION!!
		//this.products = ??
		var store = this; //avoids the scoping problem detailed below!
		store.products = []; // we initialize products here b/c now the page can
		// load w/o waiting for the data that'll be returned from our GET request
		$http.get('/products.json').success(function(data) {
			// That function after success is a callback b/c we know this success 
			// function will return some data.
			// Also. we can't just set 'this.products = data', because inside of this
			// callback, the 'this' keyword is now pointing at $http!!
			store.products = data;
		});
	}]);

	app.directive('productTitle', function() {
		return {
			restrict: 'E', // Type of Directive; E is for Element b/c we're 
			// declaring a new type of html element. Other type is Attribute; when
			// we just add it onto any old <p> or <h1> as an 
			// attribute: <p product-title></p>
			templateUrl: 'product-title.html' // This is the url of the template
			// that we want to load into the page
		};
	});
	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){

			},
			controllerAs: 'panels'
		};
	});
})();