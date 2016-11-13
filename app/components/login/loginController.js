angular.module('ProApp')

	.controller('LoginController', function($scope, $location) {

		var userEmail = document.getElementById('userEmail');
		var userPassword = document.getElementById('userPassword');
		var btnLogin = document.getElementById('btnLogin');
		var btnSignUp = document.getElementById('btnSignUp');
		var btnLogout = document.getElementById('btnLogout');
		var input = document.getElementById('input');

		//---LOGIN WITH EMAIL AND PASSWORD---//

		btnLogin.addEventListener('click', e => {

			var email = userEmail.value;
			var password = userPassword.value;
			var auth = firebase.auth();

			var promise = auth.signInWithEmailAndPassword(email, password);

			promise.catch(e => console.log(e.message));


		});

		//---CREATE USER WITH EMAIL AND PASSWORD AND SIGN IN---//


			btnSignUp.addEventListener('click', e => {

			var email = userEmail.value;
			var password = userPassword.value;
			var auth = firebase.auth();

			var promise = auth.createUserWithEmailAndPassword(email, password);
			promise.catch(e => console.log(e.message));


			});

			//---LOGOUT---//

			btnLogout.addEventListener('click', e => {
				firebase.auth().signOut();
			});

			//---NAVIGATE TO COMMENTS PAGE---//

			btnComment.addEventListener('click', e => {
				$location.path('/comment');
			});
			
			//---CHECK AUTH STATE CHANGE, SHOW/HIDE LOGOUT AND COMMENT BTN--//

			firebase.auth().onAuthStateChanged(function(user) {
				if(user) {
					console.log(user);
					btnLogout.classList.remove('hide');
					btnComment.classList.remove('hide');
					btnLogin.classList.add('hide');
					btnSignUp.classList.add('hide');
					input.classList.add('hide');
					
				} else {
					console.log('Not logged in');
					btnLogout.classList.add('hide');
					btnComment.classList.add('hide');
					btnLogin.classList.remove('hide');
					btnSignUp.classList.remove('hide');
					input.classList.remove('hide');
					
				}
			});
		});


			
		
	