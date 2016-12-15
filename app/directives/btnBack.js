angular.module('BackBtn', [])

	.directive('btnBack', function() {
		return {
			restrict: 'EA',
			templateUrl: 'app/views/btnBack.html'
		};
	});