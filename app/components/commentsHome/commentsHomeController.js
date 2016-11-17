angular.module('ProApp')

	.controller('CommentsHomeCtrl', ['$scope', function($scope) {

		var readPost = firebasedb.database().ref('Post/' + postId + 'undefined/');

			readPost.on('value', function(snapshot) {
				updateReadPost(readPost, snapshot.val());
			});

		
	}]);