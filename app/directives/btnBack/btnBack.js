angular.module('ProApp')

	.directive('btnBack', function() {
		return {
			restrict: 'EA',
			templateUrl: 'app/directives/btnBack/btnBack.html'
		};
	});