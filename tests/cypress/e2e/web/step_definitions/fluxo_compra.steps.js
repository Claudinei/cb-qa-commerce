import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../../pages/HomePage";
import ProductPage from "../../../pages/ProductPage";
import CartPage from "../../../pages/CartPage";
import CheckoutPage from "../../../pages/CheckoutPage";
import StatusPage from "../../../pages/StatusPage";

import productData from "../../../fixtures/productData.json";
import checkoutData from "../../../fixtures/checkoutData.json";
import checkoutMissingAddressData from "../../../fixtures/checkoutMissingAddressData.json";


Given("que o usuário acessa a loja", () => {
  HomePage.visit();
});


When("adiciona o produto ao carrinho", () => {
  ProductPage.addProductToCart(productData.productName);
});


When("acessa o carrinho", () => {
  CartPage.openCart();
});


When("o produto deve ser exibido no carrinho", () => {
  CartPage.validateProduct(productData.productName);
  CartPage.validateQuantity(productData.quantity);
  CartPage.validatePrice(productData.price);
  CartPage.validateTotal(productData.total);
});


When("vai para o checkout", () => {
  CartPage.goToCheckout();
});


When("preenche os dados de entrega", () => {
  CheckoutPage.fillDeliveryData(checkoutData);
});

When("preenche os dados de entrega incompletos", () => {
  CheckoutPage.fillDeliveryData(checkoutMissingAddressData);
});


When("seleciona a forma de pagamento", () => {
  CheckoutPage.selectPayment();
});


When("aceita os termos", () => {
  CheckoutPage.acceptTerms();
});


When("finaliza o pedido", () => {
  CheckoutPage.finishOrder();
});


Then("o pedido deve ser finalizado com sucesso", () => {
  StatusPage.validateOrderSuccess();
});


Then("deve exibir mensagem de campos obrigatórios", () => {
  CheckoutPage.validateRequiredFieldsMessage();
});

When("deve exibir mensagem este campo é obrigatório", () => {
  CheckoutPage.validateAddressRequired();
});
