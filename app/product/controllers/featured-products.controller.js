(() => {
  let module = angular.module("products");

  class FeaturedProductsController {
    constructor($scope, products) {
      this.$scope = $scope;

      $scope.products = [];
      $scope.categories = [];
      $scope.getCategoryProducts = this.getCategoryProducts.bind(this);

      products.getFeaturedProducts().then(res => ($scope.products = res.data));
      products.getCategories().then(res => ($scope.categories = res.data));
    }

    /**
     *
     * @param {Category} category
     */
    getCategoryProducts(category) {
      let filtered = this.$scope.categories.filter(
        x => x.categoryID == category.categoryID
      );
      console.log(filtered);
      return filtered;
    }
  }

  // Create Products controller and assign injected dependencies
  FeaturedProductsController.$inject = ["$scope", "products"];

  module.controller("featuredProducts", FeaturedProductsController);
})();
