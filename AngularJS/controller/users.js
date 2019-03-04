app.controller("Users", function ($scope, $http) {
  $scope.list = [];

  $scope.load = function () {
    $http.get("https://reqres.in/api/users?page=4")
      .then(function (data) {
        $scope.list = data.data.data;
      }, function (error) {
        console("Error");
      });
  }

})