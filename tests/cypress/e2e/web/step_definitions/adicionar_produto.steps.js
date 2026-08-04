import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a loja", () => {
  cy.visit("/");
});

