class ShipAddressController {
  constructor($scope) {
    this.$scope = $scope;

    $scope.customer = {
      companyName: "Bottom-Dollar Markets",
      contactName: "Elizabeth Lincoln",
      address: "23 Tsawassen Blvd.",
      city: "Tsawassen",
      region: "BC",
      postalCode: "T2F 8M4",
      country: "Canada"
    };
  }
}

ShipAddressController.$inject = ["$scope"];

angular.module("checkout").controller("ship-address", ShipAddressController);
