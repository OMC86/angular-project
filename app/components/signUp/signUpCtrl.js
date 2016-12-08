angular.module('ProApp')

    .controller('SignUpCtrl', ['$scope', '$rootScope', 'store','$state', '$window', function($scope, $rootScope, store, $state, $window) {


$scope.submitForm = function(username, name, password) {

            var username = $scope.user.email;
            var password = $scope.user.password;
            var name = $scope.user.name;
            var userModalRef = firebasedb.database().ref('User');

        /*  userModalRef.orderByChild("username").on("child_added", function(data) {

             if(data.val().username === username){  

                    alert('user exists');
                    $window.location.reload();
                }else{   */
    

                var newUser = userModalRef.push();


                        newUser.set({
                            username: username,
                            name: name,
                            password: password
                        });


                        store.set("username", username);
                        store.set("key", newUser.key);
                        store.set("name", name);
                        $rootScope.$broadcast('userLoggedIn');

                        $state.go('comment');

                    console.log(newUser);
                    
              
                
            };
    
 
}]);