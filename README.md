- url: https://etcusic.github.io/learning-materials-frontend/ 
- api repo: https://github.com/etcusic/conexion-resource-mgmt 
- video demo: 

Description: This is a single page React.js application created for the purpose of language acquisition exercises. The basic concept is using flash cards, but there are different exercise and games designed so that the student can interact with the learning materials in different ways depending on how they are best engaged. There is a separate Rails application where administrators can create and edit these resources. The Rails app can then act as an API and render the relevant resources in JSON format for this React app to be able to read (link to Rails repo above).

Instructions to run locally:

For the backend, clone the repository from the Rails repo link and run the following commands in your CLI:

- bundle install 
- rake db:migrate 
- rails s -p 3001 

(to initialize the seed data, type in 'rake db:seed' into your console)

This should set up the rails server if everything runs correctly. Then clone this repo and run the following commands:

- npm install 
- npm start

Note: This application still needs a facelift. It is completely functional, but I haven't added hardly any CSS to it to make it look good. Hopefully I can get around to this soon!