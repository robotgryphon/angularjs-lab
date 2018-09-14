class ShipViaController {
  constructor($scope) {
    this.$scope = $scope;

    $scope.shipViaOptions = [
      { id: 1, name: "Next day", price: 100 },
      { id: 2, name: "Two day", price: 50 },
      { id: 3, name: "Ground", price: 0 }
    ];
  }
}

ShipViaController.$inject = ["$scope"];

angular.module("checkout").controller("ship-via", ShipViaController);
