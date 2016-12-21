angular.module('ProApp')

	.controller('PostListCtrl', ['$scope', '$state', '$stateParams', '$rootScope', function($scope, $state, $stateParams, $rootScope) {


		/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE DEFAULT VIEW--*/


		$scope.postList = [];


				var readPost = firebasedb.database().ref('Post').orderByChild('postedOn').limitToLast(10);
		
					readPost.once('value', function(snapshot) {
	

					$scope.$apply(function(){

				

					$scope.postList  = snapshot.val();
				});
			});

/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE DEFAULT VIEW--*/


		$rootScope.$on('newestPost', function() {

			$scope.postList = [];


				var readPost = firebasedb.database().ref('Post').orderByChild('postedOn').startAt().limitToLast(10);
		
					readPost.once('value', function(snapshot) {
	

					$scope.$apply(function(){

				

					$scope.postList  = snapshot.val();
				});
			});
		});


/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE OLDEST POSTS--*/

		$rootScope.$on('oldestPost', function() {

			$scope.postList = [];


				var readPost = firebasedb.database().ref('Post').orderByChild('postedOn').limitToFirst(10);
		
					readPost.once('value', function(snapshot) {
	

					$scope.$apply(function(){

				

					$scope.postList  = snapshot.val();
				});
			});
		});

/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE POSTED BY NAME--*/


		$rootScope.$on('namePost', function() {

			$scope.postList = [];


				var readPost = firebasedb.database().ref('Post').orderByChild('postByName').limitToLast(10);
		
				readPost.once('value', function(snapshot) {
	

					$scope.$apply(function(){

				

					$scope.postList  = snapshot.val();
				});	
			});
		});			
			
				

			$scope.goToReadView = function(postId) {
				
				$state.go('read', {postId: postId});   
			};

		
	
}]);

			
		








