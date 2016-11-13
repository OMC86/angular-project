angular
	.module('ProApp')
	.controller('MyCtrl', function($firebaseObject) {
		const rootRef = firebase.database().ref().child('angular');
		const ref = rootRef.child('object');
		this.object = $firebaseObject(ref);

		});