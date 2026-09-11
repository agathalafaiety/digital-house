# Digital House — Desenvolvimento Web Full Stack

Exercícios e projetos desenvolvidos durante o curso de **Desenvolvimento Web Full Stack** da Digital House, em parceria com a Gerando Falcões.

## Conteúdo

| Diretório | Descrição | Tecnologias |
| --- | --- | --- |
| [`fundamentos-javascript`](./fundamentos-javascript/) | Exercícios organizados por tema, da sintaxe básica aos recursos modernos da linguagem | JavaScript |
| [`projetos/cine-house`](./projetos/cine-house/) | Manipulação de um catálogo de filmes | JavaScript e JSON |
| [`projetos/dh-school`](./projetos/dh-school/) | API para consulta de alunos, áreas, cursos, professores e turmas | Express, Sequelize e MySQL |
| [`projetos/express-api`](./projetos/express-api/) | Introdução a servidor, rotas e controllers | Express |
| [`projetos/express-ejs`](./projetos/express-ejs/) | Configuração inicial de uma aplicação com view engine | Express e EJS |
| [`projetos/fundamentos-node`](./projetos/fundamentos-node/) | Módulos, leitura de arquivos e manipulação de datas | Node.js |
| [`projetos/shoes-store`](./projetos/shoes-store/) | Página de uma loja de calçados | HTML e CSS |
| [`projetos/site-estatico`](./projetos/site-estatico/) | Projeto introdutório de página estática | HTML e CSS |

## Estrutura

```text
digital-house/
├── fundamentos-javascript/
│   ├── 01-sintaxe-basica/
│   ├── 02-condicionais/
│   ├── 03-arrays-e-objetos/
│   ├── 04-funcoes/
│   ├── 05-lacos-de-repeticao/
│   └── 06-recursos-modernos/
├── projetos/
│   ├── cine-house/
│   ├── dh-school/
│   ├── express-api/
│   ├── express-ejs/
│   ├── fundamentos-node/
│   ├── shoes-store/
│   └── site-estatico/
├── .editorconfig
├── .gitignore
├── LICENSE
└── README.md
```

## Pré-requisitos

- Node.js e npm para os exercícios e projetos de back-end.
- MySQL para executar a API `dh-school`.
- Um navegador para abrir os projetos estáticos.

## Como usar

Clone o repositório:

```bash
git clone https://github.com/agathalafaiety/digital-house.git
cd digital-house
```

Os arquivos de fundamentos podem ser executados diretamente com Node.js:

```bash
node fundamentos-javascript/01-sintaxe-basica/variaveis.js
```

Cada projeto Node possui seu próprio `package.json`. Entre na pasta desejada, instale as dependências e use o comando padronizado:

```bash
cd projetos/express-api
npm install
npm start
```

Consulte as [instruções específicas da API DH School](./projetos/dh-school/README.md) para preparar o banco MySQL.

Os projetos `shoes-store` e `site-estatico` podem ser abertos diretamente pelo arquivo `index.html`.

##

- Desenvolvido por [Agatha Lafaiety](https://github.com/agathalafaiety).

