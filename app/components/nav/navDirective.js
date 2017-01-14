angular.module('ProApp')

	.directive('navBar', function() {
		return {
			restrict: 'EA',
			templateUrl: 'app/components/nav/nav.html'
		};
	});