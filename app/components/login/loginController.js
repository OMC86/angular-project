angular.module('ProApp')

	.controller('LoginController', ['$scope', 'store', '$state', '$rootScope', function($scope, store, $state, $rootScope) {

		

		$rootScope.$on('userLoggedIn', function() {  

		var user = store.get("username");


		$scope.showLogout = function() {

			if(user)
				return true;

		};
	});

		$scope.logout = function() {
				store.remove("username");
				store.remove("password");
				store.remove("key");
				store.remove("name");
				$rootScope.$broadcast('userLoggedOut');
				$state.go("home");

			};
		


			//---LOG IN USER WITH EMAIL AND PASSWORD---//


		$scope.submitForm = function() {
			var username = $scope.user.email;
			var password = $scope.user.password;
			

			var userModalRef = firebasedb.database().ref('User');
			
			userModalRef.orderByChild("username").on("child_added", function(data) {

				if(data.val().username !== username){
					alert("No user exists, Please sign up!.");
					$state.go('signUp');
				}else{
			

			userModalRef.orderByChild("username").equalTo(username).once("child_added", function(data){
				
				var key = data.key;
		



				if(!!data.val().username && data.val().password === password){

					 store.set("username", username);
                     store.set("password", password);
                     store.set("key", key);
                    

                     $rootScope.$broadcast('userLoggedIn');

                     $state.go('comment');

					console.log("logged in");

				}else{
					alert("Incorrect password")
				}
			
				});
			};
		});
	};

	
		
	
	


		var user = store.get("username");
		$scope.showLogout = function() {

			if(user)
				return true;

		};
		
		

		//---CREATE USER WITH EMAIL AND PASSWORD AND SIGN IN---//


		/*	btnSignUp.addEventListener('click', e => {

			var email = userEmail.value;
			var password = userPassword.value;
			var auth = firebase.auth();

			var promise = auth.createUserWithEmailAndPassword(email, password);
			promise.catch(e => console.log(e.message));


			});
*/
		

			

			//---NAVIGATE TO COMMENTS PAGE---//

	/*		btnComment.addEventListener('click', e => {
				$location.path('/comment');
			});
			
		*/	//---CHECK AUTH STATE CHANGE, SHOW/HIDE LOGOUT AND COMMENT BTN--//  */

		
		}]); 


			
		
	