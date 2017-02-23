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


			/*--METHOD FOR BTN-DROP-DOWN DIRECTIVE, SHOW NEWST OR OLDEST POSTS--*/

			$scope.sortPostByValue = function(value){

				$scope.postList = [];

				if(value === 'Newest'){
					readPost = firebasedb.database().ref('Post').orderByChild('timeStamp').limitToLast(10);
				}else if(value === 'Oldest'){
					readPost = firebasedb.database().ref('Post').orderByChild('timeStamp').limitToFirst(10);
				}else{
					readPost = firebasedb.database().ref('Post').orderByChild('timeStamp').limitToFirst(10);
				}
				
		
					readPost.once('value', function(snapshot) {
	

					$scope.$apply(function(){

				
					$scope.postList  = snapshot.val();
				});
			});

		};


			
				

			$scope.goToReadView = function(postId) {
				
				$state.go('read', {postId: postId});   
			};

		
	
}]);

			
		








