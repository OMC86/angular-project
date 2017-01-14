angular.module('ProApp')

	.directive('btnDropDown', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/btnDropDown/btnDropDown.html',
			scope : {
				type: '&onSortBy'
			},
			link : link 
		};

		function link(scope, element, attrs) {

				scope.showByTypeValue = '';
				scope.onPostType = function(typeValue){
					scope.showByTypeValue = typeValue;
					scope.type({value : typeValue});
				}
			}
	});