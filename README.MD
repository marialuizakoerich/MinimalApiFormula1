# 🏎️ API Fórmula 1

API simples desenvolvida com Node.js + Fastify para  gerenciamento de equipes e pilotos de Fórmula 1.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para praticar a criação de APIs  com Node.js e TypeScript, utilizando arquitetura em camadas com controllers, services e data.*

---

## ✨ Funcionalidades

- [x] Listagem de todos os pilotos
- [x] Busca de piloto por id
- [x] Listagem de todas as equipes
- [x] Busca de equipe por id

---

## 🛠️ Tecnologias

- [Node.js]
- [TypeScript]
- [Fastify]
- [Chalk]

---

## 🧱 Estrutura do Projeto
```
src/
├── 📂 controllers/   → recebe as requisições e envia as respostas
├── 📂 services/      → regras de negócio
├── 📂 data/          → dados da aplicação
└── 📄 server.ts      → inicialização do servidor
```

---

## ⚙️ Como rodar o projeto

```bash
# Clone o repositório
git clone <https://github.com/marialuizakoerich/MinimalApiFormula1>

# Entre na pasta
cd MinimalApiFormula1


# Instale as dependências
npm install


# Execute o servidor em modo desenvolvimento:
npm run start:dev
```

---

## 📚 Aprendizados

- Criação de APIs REST com Fastify e TypeScript
- Separação de responsabilidades em controllers e services
- Tipagem de dados com `type`

---

## 🔮 Melhorias futuras

O que você pretende adicionar ou melhorar no projeto:

- [x] Conectar a um banco de dados real
- [ ] Adicionar autenticação com JWT
- [x] Criar camada de repository
- [] Adicionar testes automatizados
- [ ] Criar documentação com Swagger

---

