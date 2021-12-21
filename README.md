*=*=*=*=*=*=*=*=*=*=*=*=
npm start - START CLIENT
*=*=*=*=*=*=*=*=*=*=*=*=

*=*=*=*=*=*=*=*=*=*=*=*=*=
npm run dev - START SERVER
*=*=*=*=*=*=*=*=*=*=*=*=*=






# Online Web Store
*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
#Using in this project
React.js;
React bootstrap;
Axios - requests to server;
React-routed-dom;
Mobx - state management;
Sequelize - ORM;
Cross-Origin Resource Sharing (CORS)
Postgress

*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
-=- Steps to run app -=-
//1 perform npm init --yes to initialize project
//2 install express (postgress) pg pg-hstore sequelize cors dotenv;
 psql -U postgres - for postgres access
 \list - listed available db
 \c database name

 \? list all the commands
 \l list databases
 \conninfo display information about current connection
 \c [DBNAME] connect to new database, e.g., \c template1
 \dt list tables of the public schema
 \dt <schema-name>.* list tables of certain schema, e.g., \dt public.*
 \dt *.* list tables of all schemas
 Then you can run SQL statements, e.g., SELECT * FROM my_table;(Note: a statement must be terminated with semicolon ;)
 \q quit psql




 db.js - configuration access db

 npm i express-fileupload (needed);

For Authorization JWT (JSON Web Token) token used;
(in server folder) npm i jsonwebtoken bcrypt (for tokens and hash psw)

*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
client
npx create-react-app .
npm i axios
react-router-dom
mobx - state manager
mobx-react-lite - for func react components
react bootstrap (npm install react-bootstrap bootstrap)

yarn
yarn install
*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
