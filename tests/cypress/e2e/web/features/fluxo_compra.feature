Feature: Fluxo de compra

Scenario: Finalizar compra com sucesso

  Given que o usuário acessa a loja
  When adiciona o produto ao carrinho
  And acessa o carrinho
  And o produto deve ser exibido no carrinho
  And vai para o checkout
  And preenche os dados de entrega
  And seleciona a forma de pagamento
  And aceita os termos
  And finaliza o pedido
  Then o pedido deve ser finalizado com sucesso

Scenario: Validar campos obrigatórios no checkout

  Given que o usuário acessa a loja
  When adiciona o produto ao carrinho
  And acessa o carrinho
  And o produto deve ser exibido no carrinho
  And vai para o checkout
  And preenche os dados de entrega incompletos
  And seleciona a forma de pagamento
  And aceita os termos
  And finaliza o pedido
  Then deve exibir mensagem de campos obrigatórios
  And deve exibir mensagem este campo é obrigatório
  