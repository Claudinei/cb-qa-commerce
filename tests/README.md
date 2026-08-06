# Automação de Testes - Cypress

Projeto de automação de testes funcionais utilizando Cypress com BDD através do Cucumber.

## Tecnologias

- Cypress
- Cypress Cucumber Preprocessor
- JavaScript
- Node.js

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Node.js instalado (versão 18)
- NPM instalado
- Aplicação web e API em execução localmente

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Claudinei/cb-qa-commerce.git

## Acesse o diretório do projeto:
cd cb-qa-commerce

## Instale as dependências:
npm install

```
## Executando a aplicação

Após instalar as dependências, inicie a aplicação:

```bash
npm start
```
### A aplicação estará disponível em:

Site: http://localhost:3000
Documentação da API: http://localhost:3000/api-docs


## Execução dos testes
### Executar os testes em modo visual:
- npx cypress open

### Executar os testes em modo headless:
- npx cypress run

```bash
## Estrutura do projeto
cypress/
├── e2e/
│   ├── api/
│   │   ├── features/
│   │   └── step_definitions/
│   └── web/
│       ├── features/
│       └── step_definitions/
├── fixtures/
├── pages/
├── services/
└── support/

```

# Cenários automatizados
### Web
Adicionar produto ao carrinho e finalizar compra.
Validar campos obrigatórios no checkout.

### API
Criar usuário utilizando endpoint POST.
Consultar usuários utilizando endpoint GET.
Validar status code e regras de negócio da API.

## Boas práticas aplicadas
- Estrutura de cenários utilizando BDD com Cucumber.
- Separação entre testes Web e API.
- Page Object Model para organização dos testes de interface.
- Camada de Services para encapsular chamadas de API.
- ApiClient para centralização das requisições HTTP.
- Reutilização de funções e dados de teste.
