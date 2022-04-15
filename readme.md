<h1 align="center"> 
  Microsserviço para autenticação de usuários
</h1>

Esta API, que permite a atenticação e autorização dos usuários na plataforma, foi desenvolvida visando sua utilização no projeto "Help Duck" (mais informações vide [este link](https://github.com/The-Bugger-Ducks/help-duck-documentation)).

> Aplicação desenvolvida por alunos do 3º semestre do tecnólogo em Desenvolvimento de Software Multiplataforma, na FATEC Profº Jessen Vidal - São José dos Campos, SP :rocket:

### :hammer_and_wrench: Tecnologias

As seguintes tecnologias e ferramentas foram utilizadas neste projeto: `TypeScript, ExpressJS, TypeORM, MongoDB, Insomnia, Heroku, Swagger`

### :gear: Como utilizar

Para consumir esta API, é preciso seguir o passo a passo abaixo ou utilizar a URL do serviço em nuvem (através deste link: [https://help-duck-auth.herokuapp.com](https://help-duck-auth.herokuapp.com)).

- Tutorial para rodar o projeto

No arquivo `.env.example`, complete as variâveis com os valores abaixo e renomeie o arquivo para `.env`.

```cl
MONGODB_CLUSTER=mongodb+srv://<username>:<password>@cluster0.rpjin.mongodb.net/
PORT=<port ex:3000>
```

Para prosseguir, é preciso que todas as ferramentas necessárias estejam devidamente instaladas (Node, Git,...). Para conferir a instalação delas, acesse [este tutorial](https://www.notion.so/Instala-o-das-ferramentas-405f3e8b014649cbb422dee6b5bd0535), já para atualização das ferramentas acesse [este link](https://www.notion.so/Atualiza-o-vers-es-diferentes-09abff4d88d44c459a7c7a925ad15bfa), e caso haja algum problema com essas instalações e/ou atualizações, acesse [este FAQ](https://www.notion.so/Tive-problemas-e-agora-c67378e1319d4723a3211aad8eb987c6). Após os downloads, baixe ou clone este repositório pelo terminal seguindo passo a passo descrito abaixo:

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/The-Bugger-Ducks/help-duck-authentication.git

# Acesse a pasta do projeto
$ cd help-duck-authentication

# Instale as dependências do projeto (são listadas no arquivo package.json)
$ yarn

# Execute o projeto
$ yarn dev
```

O servidor inciará localmente na porta 3000. Use o Insomnia para simular requisições e respostas das rotas (pelo link [https://localhost:3000](https://localhost:3000)) ou utilize o projeto front-end do "Help Duck" para executar as funcionalidades da aplicação (acesse o repositório por [este link](https://github.com/The-Bugger-Ducks/help-duck-web)).

## :railway_track: Rotas disponíveis

<div align="center">

|                                                                  Tipo | Rota                   | Ação                     |
| --------------------------------------------------------------------: | :--------------------- | :----------------------- |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/auth/authentication` | Autenticação de usuários |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/auth/authorization`  | Autorização de usuários  |

</div>

### Explicação da estrutura das pastas

| Pasta                                    | Definição                                                                  |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| :open_file_folder: node_modules/         | Armazena as bibliotecas (dependências) usadas pelo projeto                 |
| :open_file_folder: src/ @types           | Pasta para adicionar novas tipagens para os modulos do express ex: Request |
| :open_file_folder: src/ app/ controllers | Arquivos com os métodos de requisição das rotas                            |
| :open_file_folder: src/ app/ models      | Arquivos considerados moldes/classes da aplicação                          |
| :page_facing_up: src/ index.ts           | Arquivo inicializador dos modulos da aplicação ex: swagger, cors, servidor... |
| :page_facing_up: src/ routes.ts          | Arquivos com os endpoints da aplicação para acesso dos metodos de autenticação e autorização |
| :page_facing_up: src/ swagger.json       | Arquivo para documentação da aplicação atraves utilizando o swagger        |
| :page_facing_up: .env.example            | Arquivo para indicação de quais variáveis serão requisitadas no servidor   |
| :page_facing_up: procfile                | Arquivo requisitado pelo heroku para deploy da aplicação na plataforma na nuvem |
| :page_facing_up: tsconfig.json           | Arquivo de configuração do typescript e estrutura de pastas, etc.          |
| :page_facing_up: package.json            | Arquivo usado para gerenciar as dependências do projeto, scripts e versões |
