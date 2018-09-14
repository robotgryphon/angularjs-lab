(() => {
  let module = angular.module("products");

  class ProductsController {
    constructor($scope, products) {
      this.$scope = $scope;

      $scope.products = [];
      $scope.categories = [];

      products.getProducts().then(res => ($scope.products = res.data));
      products.getCategories().then(res => ($scope.categories = res.data));
    }
  }

  // Create Products controller and assign injected dependencies
  ProductsController.$inject = ["$scope", "products"];

  module.controller("products", ProductsController);
})();
