angular.module('StarCountDirective', [])

	.directive('starCount', function() {
		return {
			restrict: 'EA',
			templateUrl: 'app/views/starCounter.html'
		};
	});