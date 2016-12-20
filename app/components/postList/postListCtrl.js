angular.module('ProApp')

	.controller('PostListCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {


		/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE (error can not use apply $ digest already in operation)--*/

		$scope.postList = [];


		var readPost = firebasedb.database().ref('Post').orderByChild('postedOn').limitToLast(10);
		
			readPost.once('value', function(snapshot) {
	

				$scope.$apply(function(){

				

				$scope.postList  = snapshot.val();

						
			
				

			$scope.goToReadView = function(postId) {
				
				$state.go('read', {postId: postId});   
			};

		});
	});
}]);

			
		








