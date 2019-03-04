app.controller("Calculator", function ($scope, DataTransfer) {
  $scope.elements = ["1", "2", "3", "4", "5", "6", "7", "8"];
  $scope.enemyElements = ["1", "2", "3", "4", "5", "6", "7", "8"];
  $scope.listEnemyPresets = DataTransfer.getEnemyPresets();
  $scope.unit1 = DataTransfer.getUnitsData()[0];
  $scope.unit2 = DataTransfer.getUnitsData()[1];
  $scope.enemy = DataTransfer.getEnemyData();

  $scope.getUnitDMG = unit => {
    var total = unit.atk * unit.atk * (1 + unit.bonus / 100) / $scope.enemy.def;
    var counter = 0;
    var ELE_PART = 0;
    unit.elements.forEach((element, i) => {
      if (element) {
        counter++;
        ELE_PART += $scope.enemy.elements[i];
      }
    });
    unit.total = Math.round(total);
    if (counter == 0) return;
    var MOD = (ELE_PART / 100) / counter;
    unit.total = Math.round(total * (1 - MOD));
    if (unit.total < 0) unit.total = 0;
  }

  $scope.getResults = () => {
    $scope.getUnitDMG($scope.unit1);
    $scope.getUnitDMG($scope.unit2);
    $scope.compare($scope.unit1, $scope.unit2);
    DataTransfer.setUnitsData($scope.unit1, $scope.unit2);
  }

  $scope.compare = (u1, u2) => {
    if (u1.total == u2.total) {
      u1.diff = u2.diff = 0;
      u1.class = u2.class = "draw";
      return;
    }
    if (u1.total > u2.total) {
      u1.class = "winner";
      u2.class = "";
    } else {
      u2.class = "winner";
      u1.class = "";
    }
    u1.diff = (-1 + u1.total / u2.total)
    u2.diff = (-1 + u2.total / u1.total)
  }


  $scope.setPreset = (preset) => {
    $scope.enemy = preset;
    $scope.getResults()
  }

})