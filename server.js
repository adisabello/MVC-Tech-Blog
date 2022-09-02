const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const {engine} = require('express-handlebars');
var path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

app.set('view engine','hbs');
app.engine('hbs', engine({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index'
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
  name: "sid",
  resave: false,
  saveUninitialized: false,
  secret: "my-secret",
  cookie: {
    maxAge: 1000 * 60 * 60 * 3,
    sameSite: true,
    secure: false
  }
}));

app.use(controllers);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
