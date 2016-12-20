angular.module('ProApp')

	.controller('HomeController', ['$scope', 'store', '$state', 'User', function($scope, store, $state, User) {
		$scope.title = "Welcome to the forum home page!";

		// GET USERNAME //

		var user = store.get('username')

		// SHOW GO TO POST LIST, HIDE LOGIN AND SIGN UP //

		$scope.showBtn = function() {
			if(user)
				return true;
		};

		// GO TO SIGN UP //

		$scope.goToSign = function() {
			$state.go('signUp');
		};

		// GO TO LOGIN // 

		$scope.goToLogIn = function() {
			$state.go('login');
		};

		//G O TO POST LIST //

		$scope.goToPostList = function() {

			$state.go('postList');
		};

	

		
		

	}]);