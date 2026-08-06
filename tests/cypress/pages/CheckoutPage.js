class CheckoutPage {

  fillDeliveryData(data) {
    if (data.firstName) cy.get("#first-name").type(data.firstName);
    if (data.lastName) cy.get("#last-name").type(data.lastName);
    if (data.address) cy.get("#address").type(data.address);
    if (data.number) cy.get("#number").type(data.number);
    if (data.cep) cy.get("#cep").type(data.cep);
    if (data.phone) cy.get("#phone").type(data.phone);
    if (data.email) cy.get("#email").type(data.email);
  }

  selectPayment() {
    cy.get("#payment-pix").check();
  }

  acceptTerms() {
    cy.get("#terms").check();
  }

  finishOrder() {
    cy.contains("Finalizar Pedido").click();
  }

  validateRequiredFieldsMessage() {
  cy.get("#alert-container")
    .should("be.visible")
    .contains("Por favor, preencha todos os campos obrigatório marcados com asteriscos!");
  }

  validateAddressRequired() {
  cy.get("#address")
    .siblings(".invalid-feedback")
    .should("contain.text", "Este campo é obrigatório.");
  }

}

export default new CheckoutPage();