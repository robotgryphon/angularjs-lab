(() => {
  let shared = angular.module("shared");

  class Cart {
    constructor($http) {
      this.cart = [];
      this.http = $http;
      this.populateCart();
    }

    populateCart() {
      if (!this.cart.length) {
        this.http.get("/api/cart").then(res => {
          console.debug(`Got cart data: ${res}`);
          if (!res.data) return;
          res.data.forEach(line => this.cart.push(line));
        });
      }
    }

    /**
     *
     * @param {Object} product  The product to add to the cart.
     * @param {*} quantity Quantity to add to cart.
     *
     * @returns Promise of $http
     */
    addToCart(product, quantity) {
      let item = {
        quantity: quantity,
        product: product
      };

      this.cart.push(item);
      return this.http.post(`/api/cart`, item);
    }

    /**
     *
     * @param {Product} product
     * @returns Promise of $http
     */
    removeFromCart(product) {
      this.cart = this.cart.filter(
        x => x.product.productID == product.productID
      );

      return this.http.delete("/api/cart", {
        data: product,
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });
    }

    getTotal() {
      if (this.cart.length == 0) return 0;

      let total = this.cart
        .map(product => product.quantity * product.product.unitPrice)
        .reduce((t, p) => t + p);

      return total;
    }

    getNumberItems() {
      if (this.cart.length == 0) return 0;

      let total = this.cart
        .map(product => product.quantity)
        .reduce((t, p) => t + p);

      return total;
    }
  }

  shared.factory("cart", Cart);
})();
