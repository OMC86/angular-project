angular.module('ProApp')

	.controller('DropDownCtrl', ['$scope', function($scope) {

		$scope.items = ['Newest', 'Oldest', 'Name'];

		$scope.selectedItem;

		$scope.dropDown = function() {

			return true;
		};


	}]);