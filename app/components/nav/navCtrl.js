angular.module('ProApp')

	.controller('NavCtrl', ['$scope', function($scope) {

		var user = firebase.auth().currentUser;

			if(user) {
				$scope.Login = 'This will be you profile pic';

			}else{

				$scope.Login = 'Log In';
			}

		}]);
	