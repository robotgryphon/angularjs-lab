// {
//     "productID": 56,
//     "productName": "A fake product",
//     "supplierID": 8,
//     "categoryID": 1,
//     "quantityPerUnit": "Box of 12",
//     "unitPrice": 81,
//     "unitsInStock": 40,
//     "unitsOnOrder": 0,
//     "reorderLevel": 0,
//     "discontinued": 0,
//     "featured": true
//   }

(() => {
  let module = angular.module("products");

  class ProductDetailController {
    constructor($scope, $routeParams, products, cart) {
      this.$scope = $scope;

      $scope.cart = cart;
      $scope.product = {};

      $scope.$watch("product", (newv, oldv, scope) => {
        products
          .getCategory(newv.categoryID)
          .then(res => ($scope.category = res.data));
      });

      products
        .getProduct($routeParams.id)
        .then(res => ($scope.product = res.data));
    }
  }

  // Create Products controller and assign injected dependencies
  ProductDetailController.$inject = [
    "$scope",
    "$routeParams",
    "products",
    "cart"
  ];

  module.controller("product-detail", ProductDetailController);
})();
