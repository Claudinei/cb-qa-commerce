Feature: Gerenciamento de usuários via API

  Scenario: Criar usuário e validar consulta via API
    Given que possuo os dados de um novo usuário
    When crio um usuário via API
    Then o usuário deve ser criado com sucesso
    When consulto os usuários via API
    Then o usuário criado deve ser encontrado