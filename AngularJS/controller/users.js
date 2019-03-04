app.controller("Users", function ($scope, $http, localStorageService) {
  $scope.key = "superKey";
  $scope.id = 0;
  $scope.list = [];
  $scope.loadServer = () => {
    $http.get("https://reqres.in/api/users?page=4")
      .then(function (data) {
        $scope.list = data.data.data;
        $scope.id = 13;
      }, function (error) {
        console("Error");
      });
  }

  $scope.saveServer = () =>{
    $http.post("https://reqres.in/api/users",$scope.list).then(data=>{
      $scope.response = data.data;
      console.log("INSERTADO")
      console.log($scope.response);
    },
    error=>{
      console.log("ERROR")
    })
  }

  $scope.saveLocal = () => {
    localStorageService.set($scope.key,$scope.list)
  }

  $scope.loadLocal = () => {
    if (localStorageService.get($scope.key)) {
      $scope.list = localStorageService.get($scope.key);
      $scope.id = $scope.list[$scope.list.length - 1].id + 1;
      
    } else {
      $scope.list = [];
    }
  }

  $scope.addUser = () => {
    $scope.newUser.id = $scope.id;
    $scope.list.push($scope.newUser)
    $scope.id++;
    $scope.newUser = {
      first_name: "",
      last_name: ""
    }
  }

  $scope.newUser = {
    first_name: "",
    last_name: ""
  }

  $scope.deleteUser = (i) => {
    $scope.list.splice(i,1);
    $scope.id = $scope.list[$scope.list.length - 1].id + 1;
  }

})