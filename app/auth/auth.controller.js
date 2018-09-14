class ShipViaController {
  constructor($scope) {
    this.$scope = $scope;
    $scope.successMessage = "";
    $scope.doLogin = this.login.bind(this);
  }

  login(user) {
    console.log(user);
    this.$scope.successMessage = `You are now logged in as ${
      this.$scope.username
    }.`;
  }
}

ShipViaController.$inject = ["$scope"];
angular.module("auth").controller("auth-login", ShipViaController);

/**
 * Register
 */
class RegistrationController {
  constructor($scope) {
    this.$scope = $scope;

    this.$scope.doRegister = this.doRegister.bind(this);
  }

  doRegister() {
    this.$scope.successMessage = `Successfully registered.`;
  }
}

RegistrationController.$inject = ["$scope"];
angular.module("auth").controller("auth-register", RegistrationController);
