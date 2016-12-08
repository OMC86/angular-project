angular.module('ProApp', [
	'ngRoute',
	'ui.router',
	'angular-storage',
	'firebase',
	'NavDirective',
	'StarCountDirective'
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

			.state('signUp', {
				url: '/sign',
				templateUrl: 'app/components/signUp/signUp.html',
				controller: 'SignUpCtrl'
			})

			.state('comment', {
				url:'/comment/:postId',
				templateUrl: 'app/components/commentsHome/commentsHome.html',
				controller: 'CommentsHomeCtrl'
				
			})

			.state('post', {
				url: '/post',
				templateUrl: 'app/components/postComments/postComments.html',
				controller: 'PostCommentsCtrl',

			})

			.state('read', {
				url: '/read/:postId',
				templateUrl: 'app/components/readComments/readComments.html',
				controller: 'ReadCommentsCtrl'
			})

		}])
		