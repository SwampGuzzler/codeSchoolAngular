(function() {
	var app = angular.module("store-products", []); // The name is random
	// & Even though we are calling both modules 'app' (like we did in 
	// the app.js file), this still works out because they are both 
	// wrapped in a closure (see line 1!).

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