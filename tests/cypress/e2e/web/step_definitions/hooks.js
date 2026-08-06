import { Before } from "@badeball/cypress-cucumber-preprocessor";
import CartApi from "../../../services/CartApi";

Before(() => {
  CartApi.clearCart();
});
