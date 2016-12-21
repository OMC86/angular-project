angular.module('ProApp', [
	'ngRoute',
	'ui.router',
	'ui.bootstrap',
	'angular-storage',
	'firebase',
	'NavDirective',
	'StarCountDirective',
	'BackBtn',
	'DropDownBtn'
	
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

			.state('postList', {
				url:'/postList',
				templateUrl: 'app/components/postList/postList.html',
				controller: 'PostListCtrl'
				
			})

			.state('newPost', {
				url: '/newPost',
				templateUrl: 'app/components/newPost/newPost.html',
				controller: 'NewPostCtrl',

			})

			.state('read', {
				url: '/read/:postId',
				templateUrl: 'app/components/readPost/readPost.html',
				controller: 'ReadPostCtrl'
			})

		}])
		