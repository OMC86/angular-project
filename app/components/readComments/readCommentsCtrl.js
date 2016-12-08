angular.module('ProApp')

	.controller('ReadCommentsCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){

		$scope.fullPost = [];
		$scope.postId = $stateParams.postId;

		var postRef = firebasedb.database().ref('Post').orderByChild('postId').equalTo($scope.postId);

			postRef.once('child_added', function(snapshot) {

					var newRef = snapshot.val();

					var postObj = {

						postTitle: newRef.postTitle,
						postBody: newRef.postBody,
						postedBy: newRef.postedBy

					}

					$scope.postTitle = newRef.postTitle;
					$scope.postBody = newRef.postBody;
					$scope.postedBy = newRef.postedBy; 
					
				
				$scope.$apply(function(){
					


			$scope.fullPost = postObj;
			console.log(newRef.postBody);   




	});

		
	});  
}]);