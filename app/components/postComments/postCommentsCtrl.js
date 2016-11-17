angular.module('ProApp')

	.controller('PostCommentsCtrl', ['$scope', function($scope) {

		$scope.submitForm = function(postId, postTitle, postBody){

			var postTitle = $scope.post.title;
			var postBody = $scope.post.body;

			firebasedb.database().ref('Post/' + postId).set({
				postTitle: postTitle,
				postBody: postBody
		});


		

	}
}]);
