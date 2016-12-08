angular.module('ProApp')

	.controller('NavCtrl', ['$scope', 'store', '$rootScope', function($scope, store, $rootScope) {




		$rootScope.$on('userLoggedIn', function() {


		var user = store.get("username");

			if(user) {
				$scope.Login = 'This will be you profile pic';
				

			}else{

				$scope.Login = 'Log In';
			}
		});

		$rootScope.$on('userLoggedOut', function() {

		var user = store.get("username");

			if(user) {
				$scope.Login = 'This will be you profile pic';
				

			}else{

				$scope.Login = 'Log In';
			}
		});

		var user = store.get("username");

			if(user) {
				$scope.Login = 'This will be you profile pic';
				

			}else{

				$scope.Login = 'Log In';
			}
	}]);
	