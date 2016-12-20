angular.module('ProApp')

    .controller('SignUpCtrl', ['$scope', '$rootScope', 'store','$state', '$window','User', function($scope, $rootScope, store, $state, $window, User) {

      

        


$scope.submitForm = function(username, password, name, photo) {

            var username = $scope.user.email;
            var password = $scope.user.password;
            var name = $scope.user.name;
            var photo = $scope.user.photo;

          
         /*   var storeRef = firebasedb.storage().ref('photos/' + photo);

                storeRef.put(photo).then(function(snapshot) {
                    var pic = snapshot.val();
                    console.log(pic);
                });
            */


        
        var userModalRef = firebasedb.database().ref('User');


         userModalRef.equalTo(username).once("value", function(data) {

            
            console.log(data.val());

             if(!!data.val()){  

                    alert('user exists');
                    $window.location.reload();
                }else{   
    

                var newUser = userModalRef.push();


                        newUser.set({
                            username: username,
                            name: name,
                            password: password
                        });   

                      
                        User.setUserInfo({username: username, name: name});

                        store.set('username', username);
                        store.set('name', name);

                        $rootScope.$broadcast('userLoggedIn');



                        $state.go('postList');

                    console.log(newUser);
                    
              
                
            };
        }); 
      }
    
 
}]);