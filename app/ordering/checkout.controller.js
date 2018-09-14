class CheckoutController {
  constructor($scope, products, cart) {
    this.scope = $scope;
    this.scope.cart = cart;
    this.products = products;

    $scope.getNextValidCCYears = this.getCCYears;
    $scope.getCartItem = this.getCartItem;
    $scope.getCartItemSubtotal = this.getCartItemSubtotal;
    $scope.processOrder = this.processOrder.bind(this);
  }

  getCCYears() {
    return [...Array(10).keys()].map(x => new Date().getFullYear() + x);
  }

  getCartItem(id) {
    return this.products.filter(p => p.productID == id).shift();
  }

  getCartItemSubtotal(item) {
    return item.product.unitPrice * item.quantity;
  }

  processOrder() {
    // console.log each item in the cart and then clear out the
    // cart contents
    let cart = this.$scope.cart;

    if (!cart || !Array.isArray(cart.cart)) return;

    cart.cart.forEach(element => {
      console.log(element);
    });

    this.$scope.cart = [];
  }

  getCartTotal(cart) {
    if (!cart) return 0;

    let arr = Array.isArray(cart);
    if (!arr) {
      console.error("Cart is not an array of products; error getting total.");
      return 0;
    }

    if (cart.length == 0) return 0;

    let total = cart.map(item => this.getCartItemSubtotal(item));
    total = total.reduce((t, i) => t + i);
    return total;
  }
}

CheckoutController.$inject = ["$scope", "products", "cart"];

angular.module("checkout").controller("checkout", CheckoutController);
