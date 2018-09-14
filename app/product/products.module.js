(() => {
  let mod = angular.module("products", ["ngRoute", "shared"]);

  mod.config($routeProvider => {
    $routeProvider.when("/search", {
      controller: "product-search",
      templateUrl: "/app/product/views/search.html",
      caseInsensitiveMatch: true
    });

    $routeProvider.when("/browse", {
      controller: "products",
      templateUrl: "/app/product/views/list.html",
      caseInsensitiveMatch: true
    });

    $routeProvider.when("/:id", {
      controller: "product-detail",
      templateUrl: "/app/product/views/detail.html",
      caseInsensitiveMatch: true
    });

    $routeProvider.when("/", {
      controller: "products",
      templateUrl: "/app/product/views/list.html",
      caseInsensitiveMatch: true
    });

    $routeProvider.otherwise({
      controller: "products",
      templateUrl: "/app/product/views/list.html",
      caseInsensitiveMatch: true
    });
  });
})();
