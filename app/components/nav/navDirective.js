angular.module('NavDirective', [])

	.directive('navBar', function() {
		return {
			restrict: 'EA',
			templateUrl: 'app/components/nav/nav.html'
		};
	});