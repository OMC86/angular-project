angular.module('ProApp')

	.controller('NewPostCtrl', ['$scope','store','User', '$state', function($scope, store, User, $state) {

		$scope.submitForm = function(postId, postTitle, postBody, postedOn, postedBy, starCount, commentCount){



			var postTitle = $scope.post.title;
			var postBody = $scope.post.body;
			var username = store.get("username");
			var name = store.get("name");
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
					starCount: starCount,
					commentCount: commentCount,
					postByName : name
				});  

				$state.go('postList');




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
