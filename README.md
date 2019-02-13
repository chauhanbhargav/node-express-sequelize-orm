# ![Node/Express/Mongoose Example App](https://cdn-images-1.medium.com/max/1200/0*ShbzlvZjT-VI72oW.png)

> ### Example Node (Express + Sequelize) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/chauhanbhargav/node-express-sequelize-orm) API spec.


# Getting started

To get the Node server running locally:

- Clone this repo `git clone https://github.com/chauhanbhargav/node-express-sequelize-orm.git`
- `npm install` to install all required dependencies
-  Run this `cp .env.example .env`
- Start mysql server and put details in `config/config.json` folder
- `npm start` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mysql2](https://github.com/mysql) - For connecting with mysql.
- [sequelize](https://github.com/sequelize/sequelize) - For Model, Seeder and Sigrations. 
- [express-group-router](https://github.com/dirkgroenen/express-group-routes) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication
- [express-validator](https://github.com/express-validator/express-validator) - For encoding titles into a URL-friendly format

## Application Structure

- `wwww.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API and Web.
- `models/` - This folder contains the schema definitions for our Sequelize Models.
- `seeders/` - This folder contains the definitions for our Sequelize Seeders.
- `app/` - This folder contains the Controller, Constant and Validator.
