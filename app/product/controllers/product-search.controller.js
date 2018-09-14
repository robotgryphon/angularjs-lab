(() => {
  let module = angular.module("products");

  // should extend ProductsController - but alas
  class ProductSearchController {
    constructor($scope, $route, products) {
      this.$scope = $scope;

      $scope.products = [];
      $scope.categories = [];

      products.getProducts().then(res => ($scope.products = res.data));
      products.getCategories().then(res => ($scope.categories = res.data));

      console.log($route.current);
      if ($route.current.params.searchString) {
        $scope.searchString = $route.current.params.searchString;
      }
    }
  }

  // Create Products controller and assign injected dependencies
  ProductSearchController.$inject = ["$scope", "$route", "products"];

  module.controller("product-search", ProductSearchController);
})();
