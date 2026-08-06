class StatusPage {
  validateOrderSuccess() {
    cy.contains("STATUS DO PEDIDO").should("be.visible");
    cy.contains("Pagamento aprovado").should("be.visible");
  }
}

export default new StatusPage();