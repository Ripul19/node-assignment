const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');

const sequelize = require('./util/database');

app.use(express.static(path.join(__dirname, 'public')));

//routes
const routes = require('./routes/routing');

//Models
const departmentModel = require('./models/department');

//session
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));

//routes
app.use(routes);

sequelize
.sync({ force: false })
  .then(() => {
    console.log('Connected');
    app.listen(3000);
    console.log("App is running");
  })
  .catch((err) => {
    console.error(err);
  });
