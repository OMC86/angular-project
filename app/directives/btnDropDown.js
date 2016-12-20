angular.module('DropDownBtn', [])

	.directive('btnDropDown', function() {
		return {
			restrict: 'EA',
			templateUrl: 'app/views/btnDropDown.html'
		};
	});