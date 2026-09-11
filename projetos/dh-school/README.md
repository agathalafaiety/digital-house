# DH School

API educacional para consultar dados de uma escola. O projeto utiliza Express, Sequelize e MySQL.

## Preparação

Crie a estrutura do banco executando [`database/schema.sql`](./database/schema.sql) no MySQL.

As configurações possuem valores locais padrão e também podem ser definidas por variáveis de ambiente. Use o arquivo [`.env.example`](./.env.example) como referência para configurar o seu terminal ou ambiente de execução.

Depois, instale as dependências e inicie a API:

```bash
npm install
npm start
```

Por padrão, o servidor fica disponível em `http://localhost:3000`.

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/alunos` | Lista todos os alunos |
| `GET` | `/alunos/2019` | Lista alunos matriculados em 2019 |
| `GET` | `/alunos/ultimos` | Retorna os dois últimos alunos da consulta |
| `GET` | `/alunos/:id` | Busca um aluno pelo identificador |
| `GET` | `/areas` | Lista áreas e seus cursos |
| `GET` | `/areas/alfabetica` | Lista áreas em ordem alfabética |
| `GET` | `/cursos` | Lista cursos e suas áreas |
| `GET` | `/professores` | Lista professores |
| `GET` | `/professores/:id` | Busca um professor pelo identificador |
| `GET` | `/turmas` | Lista turmas, cursos e professores |
| `GET` | `/turmas/anoinicio` | Lista turmas pelo ano de início |

## Variáveis de ambiente

| Variável | Padrão | Finalidade |
| --- | --- | --- |
| `PORT` | `3000` | Porta HTTP da API |
| `DB_HOST` | `localhost` | Servidor MySQL |
| `DB_PORT` | `3306` | Porta do MySQL |
| `DB_NAME` | `escola` | Nome do banco |
| `DB_USER` | `root` | Usuário do banco |
| `DB_PASSWORD` | vazio | Senha do banco |
