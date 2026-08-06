class CartApi {

  clearCart() {
    cy.request({
      method: "DELETE",
      url: "/api/carrinho/1/1",
      failOnStatusCode: false
    });
  }
}

export default new CartApi();