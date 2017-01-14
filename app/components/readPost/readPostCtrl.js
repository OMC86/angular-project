angular.module('ProApp')

	.controller('ReadPostCtrl', ['$scope', '$state', '$stateParams', 'store', 'User', function($scope, $state, $stateParams, store, User){

							/*===DISPLAY POST===*/


		$scope.fullPost = [];

		$scope.postId = $stateParams.postId;

		var postRef = firebasedb.database().ref('Post').orderByChild('postId').equalTo($scope.postId);

			postRef.once('child_added', function(snapshot) {

					var newRef = snapshot.val();

					var postObj = {

						postTitle: newRef.postTitle,
						postBody: newRef.postBody,
						postByName: newRef.postByName

					}

					$scope.postTitle = newRef.postTitle;
					$scope.postBody = newRef.postBody;
					$scope.postByName = newRef.postByName; 
					
				
				$scope.$apply(function(){
					


			$scope.fullPost = postObj;
			  


	});
}); 
											/*===SUBMIT COMMENT===*/

			$scope.submitForm = function(comment, postedOn, postedBy, starCount, postByName, photo, linkToPost, postId){

			var pId = $scope.postId;

			var name = User.getUserInfo().name ?  User.getUserInfo().name  : store.get('name');
			var comment = $scope.post.comment;
			var username = User.getUserInfo().username ?  User.getUserInfo().username  : store.get('username');
			var postsModalRef = firebasedb.database().ref('Comment');
			var newPost = postsModalRef.push();
			var postedOn = new Date();

			


				newPost.set({
					comment : comment,
					postedOn : postedOn.toString(),
					postedBy : username,
					name : name, 
					postId : $stateParams.postId
				});  

				$state.go($state.current, {pId}, {reload: true});


			};						


									/*===GET COMMENT COUNT===*/













									/*===DISPLAY COMMENT===*/


		$scope.fullComment = [];


		var commentRef = firebasedb.database().ref('Comment').orderByChild('postId').equalTo($scope.postId);

			commentRef.once('value', function(snapshot) {


				var commentData = snapshot.val();

								
				
				$scope.$apply(function(){
					


			$scope.fullComment = commentData;

		});
	});











}]);