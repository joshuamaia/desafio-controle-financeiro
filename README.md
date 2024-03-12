# Desafio - Sistema Financeiro

Este é um sistema web composto por um Front-end SPA (Single Page Application) desenvolvido em Angular e um Back-end em Java Spring Boot.

## Executando o Projeto

Siga estas etapas para executar o projeto:

1. Rodar o back (baseproject)

1.1 Criar o banco de dados baseapi no postgres
1.2 Configurar usuário e senha do banco no arquivo application.yml
1.3 rodar a classe BaseprojectApplication

2. Rodar o front (baseprojectweb)

2.1 npm install --legacy-peer-deps

2.2 ng serve

- A aplicação será executada completamente, com backend, frontend e banco de dados.
- Ela estará disponível no endereço http://localhost:4200 do seu navegador.

## Conhecendo o projeto

- No Menu Pessoas é Possível manipular a criação, edição e exclusão de Pessoas;
- No Menu Controle Financeiro, na opção listar é Possível manipular a criação, edição e exclusão de Controle Financeiro. Também é possível gerar um PDF do controle financeiro das pessoas (está em inglês, pois não consegui traduzir) e ver a cotação do dolar agora;
- No Menu Controle Financeiro, na opção Dashboard é possível ver um gráfico de barra com Despesas e Receitas de cada pessoa, além da despesa e receita geral no sistema.
