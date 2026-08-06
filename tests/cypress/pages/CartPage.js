class CartPage {

  openCart() {
    cy.get('a[href="/cart.html"]').click();
  }

  goToCheckout() {
    cy.get('a[href="/checkout.html"]').click();
  }

  validateProduct(productName) {
    cy.contains("legend", productName).should("be.visible");
  }

  validateQuantity(quantity) {
    cy.contains(`Quantidade: ${quantity}`).should("be.visible");
  }

  validatePrice(price) {
    cy.contains(`Preço: ${price}`).should("be.visible");
  }

  validateTotal(total) {
    cy.contains(`Total: ${total}`).should("be.visible");
  }

}

export default new CartPage();