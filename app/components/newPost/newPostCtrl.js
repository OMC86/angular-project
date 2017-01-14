angular.module('ProApp')

	.controller('NewPostCtrl', ['$scope','store','User', '$state', function($scope, store, User, $state) {

		$scope.submitForm = function(postId, postTitle, postBody, postedOn, postedBy, starCount, commentCount){



			var postTitle = $scope.post.title;
			var postBody = $scope.post.body;
			var username = User.getUserInfo().username ?  User.getUserInfo().username  : store.get('username');
			var name = User.getUserInfo().name ?  User.getUserInfo().name  : store.get('name');
			var postsModalRef = firebasedb.database().ref('Post');
			var newPost = postsModalRef.push();
			var postId = newPost.key;
			var postedOn = new Date();
			var timeStamp = (new Date()).getTime();


				newPost.set({
					postId : postId,
					postTitle : postTitle,
					postBody : postBody,
					postedOn : postedOn.toString(),
					postedBy : username,
					postByName : name,
					timeStamp : timeStamp
				});  

				$state.go('postList');


		 }
		

	
}]);
