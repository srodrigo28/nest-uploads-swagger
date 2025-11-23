<div align="center">
  
# API Revisão 03 — NestJS 11 + Prisma 6 + Swagger

</div>

<div align="center">
  
[![Node.js](https://img.shields.io/badge/Node.js-v20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-v11-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-v6-2.30.0-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Tested_with-Jest-15C213?logo=jest&logoColor=white)](https://jestjs.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>

<p align="center">
  <img src="./screens/swagger.png" alt="Swagger UI" width="100%"/>
</p>


API moderna, escalável e totalmente tipada construída com as melhores práticas do ecossistema NestJS 11.

## ✨ Principais Características

- **NestJS 11** – Framework progressivo com arquitetura modular
- **TypeScript** – Tipagem forte end-to-end
- **Prisma 6** – ORM moderno, seguro e com auto-complete incrível
- **Swagger (OpenAPI)** – Documentação interativa automática
- **Config Module** – Gerenciamento de variáveis de ambiente robusto
- **Jest** – Testes unitários e de integração completos
- **Validação com class-validator + class-transformer**
- **DTOs bem definidos** e padrão de camadas (Controllers → Services → Repositories)

## 🚀 Começando

### Pré-requisitos

- Node.js ≥ 20.x
- PostgreSQL (ou outro banco suportado pelo Prisma)
- npm ou yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/api-revisao-03.git
cd api-revisao-03

# Instale as dependências
npm install

# Configure as variáveis de ambiente (copie o exemplo)
cp .env.example .env
# Edite o .env com suas credenciais do banco
```

### Rodando a aplicação

#### Desenvolvimento com hot-reload
```
npm run start:dev
```

#### Build de produção
```
npm run build
```

#### Iniciar em produção
```
npm run start:prod
```
### Testes

#### Testes unitários
```
npm run test
```

#### Testes e2e
```
npm run test:e2e
```

#### Cobertura de testes
```
npm run test:cov
```
