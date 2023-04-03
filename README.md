# Pata Keja

# About the project

Pata Keja is a room finder React app built with a Ruby on Rails backend.The app is designed to create a platform for apartment owners to post their apartments for people interested in renting them hence promoting their apartments.The user is required to create an account/signup then signin/login to their accounts inorder to add appartments to their lists.

- The following image demonstrates the application functionality:
  Homepage:
  <img src ="./Home-page.png">
  User signup:
  <img src ="./Sign-UP.png">
  Login page:
  <img src ="./Login.png">

Figma [design link] https://www.figma.com/file/yvsbaA42gGBvpXmrERBF3o/Untitled?node-id=0%3A1&t=SqZoDvSzgaEgPRAh-1

## Setup Requirements

- Ruby version : _2.7.4_
- Postman (for testing API endpoints)
- React Router Dom version 6

## Setup Installation

    * Clone the repository
    * To set up the backend, run:
        - bundle install
    * To set up the frontend, run:
        - npm install --prefix client
    * Run the following commands to get the entire project running:
        - foreman start -f Procfile.dev
    * On the client directory, run the following command to install react-roter-dom
        - npm install react-router-dom@6
    * For installation of React mui, run:
        - npm install bootstrap-css-only
        - npm i mdb-react-ui-kit

## Endpoints

> POST

    /users

- Create a new user

  {
  username:"string",
  email: "string",
  password: "string",
  age:"string"
  occupation:"string"
  interest:"string"

  }

- Response

  201 Created

> POST (Login)

    /login

- User login

  {
  username: "string",
  password: "string"
  }

- Response

  201 created

> DELETE (Logout)

    /logout

- Response

  []

> Get House types

    /types

-Response
 
 {
  200 OK
  }

> Get all aparments

- Response

  {
  200 OK
  }
