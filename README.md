# Cass Store - E-commerce

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📜 Descrição

**Cass Store** é uma Single-Page Application (SPA) que simula o front-end de uma loja online. A aplicação não possui um back-end próprio; em vez disso, consome a API pública e gratuita [FakeStoreAPI](https://fakestoreapi.com/) para obter dados de produtos, usuários e autenticação.

---

## ✨ Funcionalidades Principais

- **Listagem de Produtos:** Visualização de produtos na página inicial.
- **Detalhes do Produto:** Página com informações completas de cada produto.
- **Autenticação de Usuário:** Sistema de Login e Logout utilizando autenticação baseada em Token JWT.
- **Carrinho de Compras:** Adicione, visualize e remova produtos do carrinho.
- **Rotas Protegidas:** As páginas de Carrinho e Admin só são acessíveis para usuários autenticados.
- **Painel de Administração:** Uma área de admin simples para visualizar e deletar produtos.
- **Lazy Loading:** O módulo de Administração é carregado sob demanda para otimizar o carregamento inicial da aplicação.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Puidor/cass-store
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd cass-store
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  A aplicação estará disponível em `http://localhost:4200/`.

---

## 🔑 API e Credenciais de Teste

Este projeto utiliza a [FakeStoreAPI](https://fakestoreapi.com/docs) para todos os dados. Para testar o fluxo de login, utilize as seguintes credenciais:

- **Usuário:** `mor_2314`
- **Senha:** `83r5^_`
