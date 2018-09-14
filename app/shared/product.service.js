(() => {
  let sharedModule = angular.module("shared");

  class ProductsService {
    constructor($http) {
      this.http = $http;
    }

    /**
     *
     * @param {Number} productID
     */
    getProduct(productID) {
      return this.http({
        url: `/api/product/${productID}`
      });
    }

    getProducts() {
      return this.http({
        url: "/api/product"
      });
    }

    getFeaturedProducts() {
      return this.http({
        url: "/api/product/featured"
      });
    }

    getCategory(categoryID) {
      return this.http({
        url: `/api/category/${categoryID}`
      });
    }

    getCategories() {
      return this.http({
        url: "/api/category"
      });
    }
  }

  sharedModule.service("products", ProductsService);
})();
