what is module in nodejs.
--> piece if js code that can be imported
we can create js module by using two way
    a. Common js module
    b. ES6

what is diff b/t npm and npx 
npm is used for running local libary execute
npx is used for running third file libary  

This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src `-> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

`why we create the all this folder inside the src` -> beacuse of this we can mainten the project seperation and along with add the test folder and static folder so manage all this folder.

Lets take a look inside the src folder

`config `-> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

`routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

`middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

`controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

`repositories `-> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

`services` -> contains the buiness logic and interacts with repositories for data from the database

`utils` -> contains helper methods, error classes etc.

Setup the project
Download this template from github and open it in your favourite text editor.
Go inside the folder path and execute the following command:
npm install
In the root directory create a .env file and add the following env variables

    ` PORT ` --> <port number of your choice>
ex:

    PORT=3000
go inside the src folder and execute the following command:

  npx sequelize init
By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

To run the server execute

npm run dev

*****************************************************************************************************************************************
                                                     
## dab connection process

clone the project on your local
Execute npm install on the same path as of your root directory of teh downloaded project
Create a .env file in the root directory and add the following environment variable
PORT=3000
Inside the src/config folder create a new file config.json and then add the following piece of json
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create and then execute
npx sequelize db:migrate


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

`for creating the any table in sequelize` --> npx sequelize model:generate --name city --attibutes name:String;
After that we got the two file one is models/city and second is migrations/city okk both file


### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
Relationship -> City has many airports and Airport belongs to a city (one to many)
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
                                                

********************************************************************************************************************************************


"body-parser": "^1.20.2",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"mysql2": "^3.11.0",  --> this packages use for the create the connection betweent the sql server and orm like when we bhi perform any query first it go to server then perform it.
"nodemon": "^3.1.4",
"sequelize": "^6.37.3",  // this is orm packages
"sequelize-cli": "^6.6.2"  // this is sequelize package that give command command that increse the productivity