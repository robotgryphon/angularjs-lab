(() => {
  let module = angular.module("main");

  // Create AboutUs controller and assign injected dependencies
  module.controller("about-us", aboutUsController);
  aboutUsController.$inject = ["$scope"];

  function aboutUsController($scope) {
    $scope.timestamp = new Date();

    let company = {
      name: "Dollar Bank",
      address: {
        street: "2700 Liberty Avenue",
        city: "Pittsburgh",
        state: "PA",
        zipcode: "15222"
      },

      emailUser: "contact",
      phone: "412-261-0000"
    };

    $scope.company = company;
    $scope.mapUrl =
      `https://maps.googleapis.com/maps/api/staticmap?markers=` +
      `${company.address.street} ${company.address.city} ` +
      `${company.address.state} ${company.address.zipcode}` +
      `&size=600x600&maptype=hybrid`;
  }
})();
