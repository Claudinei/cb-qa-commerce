import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UserApi from "../../../services/UserApi";

let userId;
let userData;

Given("que possuo os dados de um novo usuário", () => {
  cy.fixture("user").then((user) => {
    userData = {
      ...user,
      email: `user${Date.now()}@teste.com`
    };
  });
});

When("crio um usuário via API", () => {
  UserApi.create(userData).then((response) => {
    expect(response.status).to.eq(201);

    userId = response.body.id;
  });
});

Then("o usuário deve ser criado com sucesso", () => {
  expect(userId).to.exist;
});

When("consulto os usuários via API", () => {
  UserApi.getAll().then((response) => {
    expect(response.status).to.eq(200);

    const user = response.body.find(
      (item) => item.id === userId
    );

    expect(user).to.exist;
    expect(user.email).to.eq(userData.email);
  });
});

Then("o usuário criado deve ser encontrado", () => {
  expect(userId).to.exist;
});