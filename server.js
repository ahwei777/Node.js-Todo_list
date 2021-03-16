require('dotenv').config();
const port = process.env.PORT || 8088;
const express = require('express');
const app = express();

// modules
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

const mainRoutes = require('./routes/mainRoutes');

app.use(cors());
app.use(flash());
app.set('json spaces', 4);
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './static')));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  res.locals.account = req.session.account;
  res.locals.successMessage = req.flash('successMessage');
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});

app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
