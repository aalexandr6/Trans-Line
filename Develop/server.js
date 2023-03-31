const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
//will expire in 15 minutes
    expires: 15 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'xh1394jln',
    database: 'drivers_db'
  },
  console.log(`Connected to the drivers_db database.`)
);


app.post('/api/new-driver', ({ body }, res) => {
  const sql = `INSERT INTO drivers (driver_name)
    VALUES (?)`;
  const params = [body.driver_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});


app.get('/api/drivers', (req, res) => {
  const sql = `SELECT id, driver_name AS name FROM drivers`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});


app.delete('/api/driver/:id', (req, res) => {
  const sql = `DELETE FROM drivers WHERE id = ?`;
  const params = [req.params.id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
      message: 'Driver not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now live on port 3001'));
});

