angular.module('ProApp')

	.controller('PostListCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {


		/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE (error can not use apply $ digest already in operation)--*/

		$scope.postList = [];


		var readPost = firebasedb.database().ref('Post').limitToLast(10);
		
			readPost.once('value', function(snapshot) {
	

				$scope.$apply(function(){

				

				$scope.postList  = snapshot.val();

		var pBody = snapshot.val();

				
				function firstLine(pBody){

				if(pBody.length > 15) {

				return (pBody.substring(0,15) + "...");
			}else{
				return (pBody);

			};
		};
		
		console.log(pBody);
		



		//	for (x in $scope.postList){

		//	}
				console.log(snapshot.val());


			$scope.goToReadView = function(postId) {
				
				$state.go('read', {postId: postId});   
			};

		});
	});
}]);

			/*	var postIds = $scope.postList;

				var postId = postiDs

				console.log(postId);  */

				
			/*	postRef.once('child_added', function(snapshot) {
					var newRef = snapshot.val();
					var postId = newRef.postId;

					postRef.orderByKey().equalTo(postId);
					

					

					console.log("Post ID: " + newRef.postId)

					console.log(newRef);
				


				$state.go('read', {});  */
		/*	});
		};  */
	


			

		/* var recentPostsRef = firebasedb.database().ref('Post').limitToLast(10);

			recentPostsRef.on('value', function(snapshot) {	
				$scope.$apply(function(){			
					$scope.postList = snapshot.val();
				});
			}); 
*/
		/*var key = readPost.key;

			$scope.starCount = ("Post/" + key).ref('starCount');*/
			  
		








