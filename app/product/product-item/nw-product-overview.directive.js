(() => {
  let module = angular.module("products");

  let ProductOverviewDirective = {
    templateUrl: "/app/product/product-item/nw-product-overview.html",
    restrict: "E",
    controller: $scope => {
      console.log("Hi!");
    }
  };

  module.directive("nwProductOverview", function() {
    return ProductOverviewDirective;
  });
})();
