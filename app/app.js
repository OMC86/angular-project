angular.module('ProApp', [
	'ngRoute',
	'ui.router',
	'firebase',
	'NavDirective'
	])

	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/components/home/homeView.html',
				controller: 'HomeController'
			})

			.state('login', {
				url: '/login',
				templateUrl: 'app/components/login/loginForm.html',
				controller: 'LoginController'
			})

			.state('Comment', {
				url:'/comment',
				templateUrl: 'app/components/commentsHome/commentsHome.html',
				controller: 'CommentsHomeCtrl'
			})

			.state('Post', {
				url: '/post',
				templateUrl: 'app/components/postComments/postComments.html',
				controller: 'PostCommentsCtrl'
			})

		}])
		