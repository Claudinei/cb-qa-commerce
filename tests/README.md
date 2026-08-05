# Automação de Testes Funcionais - Cypress

## Tecnologias utilizadas

- Cypress
- Cypress Cucumber Preprocessor (BDD)
- JavaScript
- Node.js / NPM
- Page Object Model (POM)
- API Testing com `cy.request`

## Estrutura do projeto

```text
cypress/
├── e2e/
│   └── web/
│       ├── features/
│       └── step_definitions/
├── pages/
├── services/
├── fixtures/
└── support/

## Instalação

### Instale as dependências do projeto:
npm install


## Execução dos testes

### Executar em modo visual:
npx cypress open

## Executar em modo headless:
npx cypress run