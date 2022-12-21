let app = angular.module("MyApp",[]);

app.controller("formCtrl", function($scope){
    $scope.master = { firstName: "Mario", lastName: "Rua" }
    $scope.reset = function(){
      $scope.user = angular.copy($scope.master);
      }
$scope.reset();
})
