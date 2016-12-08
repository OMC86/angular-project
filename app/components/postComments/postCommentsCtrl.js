angular.module('ProApp')

	.controller('PostCommentsCtrl', ['$scope','store', function($scope, store) {

		$scope.submitForm = function(postId, postTitle, postBody, postedOn, postedBy, starCount, commentCount){

			var postTitle = $scope.post.title;
			var postBody = $scope.post.body;
			var username = store.get("username");
			var postsModalRef = firebasedb.database().ref('Post');
			var newPost = postsModalRef.push();
			var postId = newPost.key;
			var postedOn = new Date();
			var starCount = 0;
			var commentCount = 0;
				newPost.set({
					postId : postId,
					postTitle : postTitle,
					postBody : postBody,
					postedOn : postedOn.toString(),
					postedBy : username,
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
