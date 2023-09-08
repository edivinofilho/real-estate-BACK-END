# Real Estate Management Application
Welcome to the Real Estate Management Application! This application enables users to register properties and potential buyers interested in property acquisitions. Additionally, it provides functionality for scheduling property visits and checking visit times for properties available in the real estate agency's database.

## Key Features:
- User Registration: Register new users easily using the POST request to /users. No authentication token is required for this action, and it's open to any user.
- User Listing: Obtain a list of all users with the GET request to /users. This endpoint is accessible only to administrators.
- User Updates: Update user information with the PATCH request to /users/:id. Administrators or account owners can make these updates.
- User Soft Deletion: Perform a soft delete on a user's account using the DELETE request to /users/:id. This action is available only to administrators.
- Authentication Token: Generate an authentication token for user sessions via the POST request to /login. No token is required for this action, and it's accessible to any user.
- Category Creation: Create new property categories with the POST request to /categories. Only administrators can perform this action.
- Category Listing: Retrieve a list of all property categories with the GET request to /categories. No authentication token is required for this action, and it's open to any user.
- Category Property Listing: Obtain a list of all properties belonging to a specific category with the GET request to /categories/:id/realEstate. No authentication token is required for this action, and it's open to any user.
- Property Creation: Create new property listings with the POST request to /realEstate. Only administrators can perform this action.
- Property Listing: Access a list of all available properties with the GET request to /realEstate. No authentication token is required for this action, and it's open to any user.
- Visit Scheduling: Schedule a visit to a property using the POST request to /schedules. Authentication with a token is mandatory for this action, ensuring security.
- Visit Listing: Retrieve a list of all scheduled visits for a specific property with the GET request to /schedules/realEstate/:id. This endpoint is accessible only to administrators.

## Technology Stack
This application is built using a powerful tech stack, including:

- bcryptjs: Ensuring secure password storage and authentication.
- dotenv: Managing environment variables for configuration.
- express: A minimal and flexible Node.js web application framework.
- jsonwebtoken: Generating and managing authentication tokens.
- pg: The PostgreSQL driver for Node.js, ensuring efficient database operations.
- typeorm: A TypeScript-based Object-Relational Mapping (ORM) library for simplified database interactions.
- zod: A TypeScript-first schema validation library for data validation.

## Credits
This project is part of the Full Stack Developer course at Kenzie Academy Brasil (www.kenzie.com.br). All rights and intellectual property of this project belong to Kenzie Academy Brasil.

I would like to extend my gratitude to the instructors' team at Kenzie for their support and guidance throughout the development of this project.

## Contact
edivinofilho@hotmail.com

## How to build it

# Projeto Final: KImóveis - TypeORM com Relacionamentos

## Introdução

O dono da imobiliária Kimóveis contratou sua empresa para desenvolver uma aplicação para o gerenciamento de seus serviços.

Através da aplicação deverá ser possível realizar o cadastro de imóveis e de usuários interessados na aquisição de propriedades. Além disso, deverá ser possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária.

A sua empresa está te confiando esse desafio, portanto, dê o seu melhor no desenvolvimento desse projeto, seguindo todas as regras impostas pela empresa contratante.

## Regras da entrega

**A entrega deve seguir as seguintes regras:**

- O código deve estar em **TypeScript**, caso não esteja a entrega será zerada.
- Deve ser feita a **serialização** dos dados utilizando a biblioteca **zod**.
- Deverá ser utilizado um banco de dados **postgres** para a elaboração da API.
- Deverá utilizar **TypeORM** no lugar de **PG e PG-Format**;
- O nome da tabela/entidade, colunas e demais especificações, devem ser **seguidas à risca**. Caso tenha divergência, os testes não funcionarão e será descontado nota.
  - Tenha muita atenção sobre o nome das chaves nos objetos de entrada e saída de cada requisição.

**Essa entrega possui testes automatizados, portanto:**

- A alteração nos testes implica em ter a nota da entrega zerada.
- Os arquivos de testes e configuração para execução deles já se encontram no repositório da entrega, sendo necessário configurar a conexão com o banco de dados para teste e desenvolvimento, e todo o restante para que a aplicação funcione.
- Não altere nenhum arquivo, apenas acrescente os arquivos que forem necessários.

**Para um melhor andamento da sua entrega, não deixe os testes para o fim, mas sim comece com eles.**

- Como essa entrega contém testes, sempre que criar uma nova rota execute o comando de execução dos testes `npm run test` ou `yarn test` a depender do gerenciador de pacotes usado.
- Execute apenas a rota específica, com o comando `npm run test <pastaDentroDoIntegration>/<nomeDoArquivo>` como, por exemplo, rodando apenas a rota de criação de usuários: `npm run test users/createUser.route.spec.ts`
- A execução dos testes a cada criação de rota ajuda no debug e no andamento do projeto, e evita erros surpresas quando o projeto estiver 100% concluído.

**Evite problemas com os testes:**

- Indicamos que inicie o projeto criando todas as entidades corretamente, pois os testes só funcionaram caso as entidades estejam criadas e exportadas com seus devidos nomes e valores de forma correta.
- Devido a isso indicamos que antes de começar as rotas, rode qualquer teste para validar se a criação das suas entidades estão seguindo a risca o que foi pedido. Tanto a tipagem quantos os contraints pedidos em cada coluna são levados em consideração para os testes.

**Crie suas tabelas seguindo essas nomenclaturas para banco e entidade:**

- Tabela **users**: precisa estar com o nome da sua entidade **User**.
- Tabela **addresses**: precisa estar com o nome da sua entidade **Address**.
- Tabela **categories**: precisa estar com o nome da sua entidade **Category**.
- Tabela **realEstates**: precisa estar com o nome da sua entidade **RealEstate**.
- Tabela **schedules**: precisa estar com o nome da sua entidade **Schedule**.

**Todas as entidades devem estar exportadas em seus respectivos arquivos, e na pasta entities deve ter um arquivo index.ts, importando e exportando todas as entidades em forma de módulo.**

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Apenas Admnistradores                  |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Apenas Admnistradores ou dono da conta |
| DELETE | /users/:id                 | Realiza um soft delete no usuário                 | Apenas Admnistradores                  |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /categories                | Criação de categoria                              | Apenas Admnistradores                  |
| GET    | /categories                | Lista todas as categorias                         | Qualquer usuário, não necessita token  |
| GET    | /categories/:id/realEstate | Lista todos imóveis que pertencem a uma categoria | Qualquer usuário, não necessita token  |
| POST   | /realEstate                | Criação de um imóvel                              | Apenas Admnistradores                  |
| GET    | /realEstate                | Lista todos os imóveis                            | Qualquer usuário, não necessita token  |
| POST   | /schedules                 | Agenda uma visita a um imóvel                     | Qualquer usuário, obrigatório token    |
| GET    | /schedules/realEstate/:id  | lista todos os agendamentos de um imóvel          | Apenas Admnistradores                  |

## Requisitos do Serviço

### POST - /users

- Rota para criação de usuário com os seguintes dados:
  - **id**: number AUTOINCREMENT. Não deve ser passado, mas gerado pelo typeORM.
  - **name**: string, máximo de 45 caracteres e obrigatório.
  - **email**: string, máximo de 45 caracteres, obrigatório e único.
  - **password**: string, máximo de 120 caracteres e obrigatório. Receberá uma string mas armazenará uma hash gerada com o **bcryptjs diretamente pela entidade do TypeORM**.
  - **admin**: boolean, obrigatório e false por padrão.
  - **createdAt**: Não deve ser passado, mas gerado pelo typeORM.
  - **updatedAt**: Não deve ser passado, mas gerado pelo typeORM.
  - **deletedAt**: Não deve ser passado, mas gerado pelo typeORM.
- A rota de criação deve retornar todos os dados, com **exceção da hash** de senha.
- Não podem ser cadastrados dois usuários com o mesmo **e-mail**.
- A rota **não precisa de autenticação** para ser acessada.

### GET - /users

- A rota deve retornar todos os dados dos usuários, com **exceção da hash de senha**.
- A rota pode ser acessada apenas por usuários administradores.

### PATCH - /users/:id

- A rota deve atualizar os dados do usuário.
- Não deve ser possível atualizar os campos **id** e **admin**.
- Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.

### DELETE - /users/:id

- A rota deve realizar um soft delete do usuário.
- A rota pode ser acessada apenas por administradores.
- Não deve ser possível realizar um soft delete em um usuário já deletado.

### POST - /login

- Rota de login recebendo **email** e **password**.
- O login deve validar se o usuário existe e validar se a senha está correta.
- Não deve ser possível realizar o login de um usuário marcado como deletado.
- A rota **não precisa de autenticação** para ser acessada.

### POST - /categories

- Rota para criação de categorias com os seguintes dados:
  - **id**: number AUTOINCREMENT. Não deve ser passado, mas gerado pelo **typeORM**.
  - **name**: string, máximo de 45 caracteres, obrigatório e único.
- Não podem ser cadastradas duas categorias com o mesmo nome.
- A rota pode ser acessada apenas por usuários administradores.

### GET - /categories

- Rota deve listar todas as categorias.
- A rota não precisa de autenticação para ser acessada.

### GET - /categories/:id/realEstate

- Rota deve listar todos os imóveis que pertencem a uma categoria.
- A rota não precisa de autenticação para ser acessada.

### POST - /realEstate

- Rota para criação de um imóvel com os seguintes dados:
  - **id**: number AUTOINCREMENT. Não deve ser passado, mas gerado pelo TypeORM.
  - **value**: decimal, precisão 12 e escala 2, obrigatório e 0 por padrão.
    - Quando trabalhamos com decimal, ela pode ser um number ou string, leve isso em consideração na hora de tipar e validar.
  - **size**: inteiro e obrigatório.
  - **address**: um objeto com os seguintes dados:
    - **street**: string, máximo de 45 caracteres e obrigatório.
    - **zipCode**: string, máximo de 8 caracteres e obrigatório.
    - **number**: number, inteiro, positivo e obrigatório.
    - **city**: string, máximo de 20 caracteres e obrigatório.
    - **state**: string, máximo de 2 caracteres e obrigatório.
  - **categoryId**: number, inteiro e obrigatório.
  - **sold**: Não deve ser passado, mas gerado no momento da validação dos dados no formato boolean com **false** por padrão.
  - **createdAt**: Não deve ser passado, mas gerado pelo typeORM.
  - **updatedAt**: Não deve ser passado, mas gerado pelo typeORM.
- Não podem ser cadastrados dois imóveis com o mesmo endereço.
- A rota pode ser acessada apenas por administradores.

### GET - /realEstate

- Rota deve listar todos os imóveis.
- A rota não precisa de autenticação para ser acessada.

### POST - /schedules

- Rota responsável pelo agendamento de uma visita a um imóvel com os seguintes dados:
  - **id**: number AUTOINCREMENT. Não deve ser passado, mas gerado pelo **TypeORM**.
  - **date**: string da data de agendamento da visita ao imóvel, no formato americano **AAAA-MM-DD**.
  - **hour**: string do horário de agendamento da visita ao imóvel, no formato **HH:MM**.
  - **realEstateId**: number, inteiro e obrigatório.
  - **userId**: Não deve ser passado no body da requisição e sim pego através do token do usuário.
- Não deve ser possível agendar uma visita a um imóvel com a mesma data e hora.
- Não deve ser possível o mesmo **usuário** agendar uma visita a 2 imóveis diferentes com a mesma data e hora.
- Só deve ser possível agendar uma visita durante horário comercial (08:00 as 18:00).
- Só deve ser possível agendar uma visita durante dias úteis (segunda à sexta).
- A rota pode ser acessada tanto por usuários comuns quanto administradores.

### GET - /schedules/realEstate/:id

- Rota deve listar todos os agendamentos de um imóvel.
- A rota pode ser acessada apenas por administradores.
