app.controller("Users", function ($scope, $http) {
  $scope.list = [];
  $scope.id = 13;
  $scope.load = function () {
    $http.get("https://reqres.in/api/users?page=4")
      .then(function (data) {
        $scope.list = data.data.data;
      }, function (error) {
        console("Error");
      });
  }

  $scope.addUser = ()=> {
    $scope.list.push($scope.newUser)
    $scope.id++;
    $scope.newUser= {
      id: $scope.id,
      first_name : "",
      last_name :""
    }
  }

  $scope.newUser= {
    id: $scope.id,
    first_name : "",
    last_name :""
  }

})