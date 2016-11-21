angular.module('ProApp')

	.controller('PostCommentsCtrl', ['$scope', function($scope) {

		$scope.submitForm = function(postId, postTitle, postBody, postedOn, starCount, commentCount){

			var postTitle = $scope.post.title;
			var postBody = $scope.post.body;

			var postsModalRef = firebasedb.database().ref('Post');
			var newPost = postsModalRef.push();
			var postedOn = new Date();
			var starCount = 0
			var commentCount = 0
				newPost.set({
					postTitle : postTitle,
					postBody : postBody,
					postedOn : postedOn.toString(),
					starCount: '1',
					commentCount: '1'
				});  

		/*	

 		$rootScope.$on('voteUp', function(key){
 			postKey.transaction(function(post) {
 				if(post) {
 					if(post.stars[Key]) {
 						post.starCount--;
 						post.stars[Key] = null;
 					} else {
 						post.starCount++;
 						if (!post.stars) {
 							post.stars = {};
 						}
 						post.stars[Key] = true;
 					}
 				}
 				return post;
 				});
 			});

 			*/

		 }
		

	
}]);
