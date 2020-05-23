# myMoney-App
Projeto para gerenciamento de finanças. [Project]

## Objetivos
Aplicar todos os conceitos importantes de API Rest com Node-restful usando como serviço o MongoDB.

## Rotas

| URL                         |  Método             | Operação                     |
| --------------------------- | ------------------- | ---------------------------- |
|  /api/billingCycles         |  GET                | Consulta todos os ciclos     |
|  /api/billingCycles         |  POST               | Cria um novo ciclo           |
| /api/billingCycles/1        |  GET                | Consulta o ciclo de ID = 1   |
| /api/billingCycles/1        |  PUT                | Altera o ciclo de ID = 1     |
| /api/billingCycles/1        |  DELETE             | Remove o ciclo de ID = 1     |
| /api/billingCycles/count    |  GET                | Consulta a qtde de ciclos    |
|  /api/billingCycles/summary |  GET                | consulta o sumário de ciclos |
