angular.module('ProApp')

	.controller('NavCtrl', ['$scope', 'store', '$rootScope', 'User', function($scope, store, $rootScope, User) {




		$rootScope.$on('userLoggedIn', function() {


		var user = store.get('username');

			if(user) {
				$scope.Login = store.get('name');
				

			}else{

				$scope.Login = 'Log In';
			}
		});

		$rootScope.$on('userLoggedOut', function() {

		var user = store.get('username');

			if(user) {
				$scope.Login = store.get('name');
				

			}else{

				$scope.Login = 'Log In';
			}
		});

		var user = store.get('username');

			if(user) {
				$scope.Login = store.get('name');
				

			}else{

				$scope.Login = 'Log In';
			}
	}]);
	