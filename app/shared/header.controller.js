(() => {
  let sharedmod = angular.module("shared");

  class HeaderController {
    constructor($scope, products, cart) {
      this.scope = $scope;
      this.products = products;
      this.cart = cart.cart;
    }
  }

  HeaderController.$inject = ["$scope", "products", "cart"];

  sharedmod.controller("header", HeaderController);
})();
