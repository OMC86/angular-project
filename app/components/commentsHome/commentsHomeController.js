angular.module('ProApp')

	.controller('CommentsHomeCtrl', ['$scope', function($scope) {


		/*--RETRIVE COMMENTS FROM DATABASE AND DISPLAY 10 PER PAGE (error can not use apply $ digest already in operation)--*/

		$scope.postList = [];

		var readPost = firebasedb.database().ref('Post');
		
			readPost.on('value', function(snapshot) {

				$scope.$apply(function(){
					$scope.postList  = snapshot.val();
				}); 
			});

			

		/* var recentPostsRef = firebasedb.database().ref('Post').limitToLast(10);

			recentPostsRef.on('value', function(snapshot) {	
				$scope.$apply(function(){			
					$scope.postList = snapshot.val();
				});
			}); 
*/
		/*var key = readPost.key;

			$scope.starCount = ("Post/" + key).ref('starCount');*/
			  
		
	}]);