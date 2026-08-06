class ProductPage {

  addProductToCart(productName) {
    cy.contains("a", productName)
      .parents(".card-body")
      .find(".add-to-cart")
      .click();
  }
}

export default new ProductPage();