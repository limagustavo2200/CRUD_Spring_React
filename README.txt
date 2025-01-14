# Case - Full Stack Application

Este projeto é uma aplicação **Full Stack** utilizando **Spring Boot** para o backend, **H2** como banco de dados e **React** para o frontend.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

case/  
├── back/                # Código fonte do backend (Spring Boot)  
│   └── backend-case/       # Projeto Spring Boot  
└── front/                  # Código fonte do frontend (React)  
    └── case-frontend/      # Projeto React  

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes softwares instalados:

- **Java 17** ou superior (para o Spring Boot)
- **Node.js** e **npm** (para o React)
- **Maven** ou **Gradle** (dependendo da configuração do seu projeto Spring Boot)
- **H2 Database** (embutido no Spring Boot)

## Configuração do Banco de Dados (H2)

O **H2 Database** já está configurado como dependência dentro do projeto Spring Boot. Ele é embutido automaticamente e não requer instalações adicionais.

### Acessando o Banco de Dados

Você pode acessar o **H2 Console** na seguinte URL:  
http://localhost:8080/h2-console

- **Configuração padrão:** Já está configurado para rodar automaticamente.
- **Configuração personalizada:** Caso precise alterar a configuração, edite o arquivo `application.properties` no backend.

## Rodando o Backend (Spring Boot)

### Passo 1: Navegar até o diretório do back
Entre no diretório do backend:

cd back/backend-case

### Passo 2: Construir e rodar o projeto
Se você estiver usando Maven, execute os seguintes comandos:
mvn clean install && mvn spring-boot:run

Ou, se estiver utilizando Gradle, execute:
./gradle build && ./gradle bootRun

O backend estará disponível em http://localhost:8080, a menos que uma porta diferente tenha sido configurada.

## Rodando o Frontend (React)

### Passo 1: Navegar até o diretório do frontend
Entre no diretório do frontend:

cd front/case-frontend

### Passo 2: Instalar as dependências
Se você ainda não tiver instalado as dependências, use o comando:

npm install

### Passo 3: Rodar o servidor de desenvolvimento  
Para iniciar o servidor de desenvolvimento do React (Vite), use o comando:

npm run dev

O frontend estará disponível em http://localhost:5173/.

