// ce code initialise une base de données MySQL en exécutant un script SQL
// Ce fichier est le point d'entrée de l'application Express
// Il configure le serveur Express, la connexion à la base de données MySQL et les routes de l'API
// Assurez-vous d'avoir installé les dépendances nécessaires : npm install express cors mysql2 dotenv sequelize
// il initilise un serveur en localhost sur le port 5000
// Il utilise CORS pour permettre les requêtes cross-origin et Express pour gérer les requêtes HTTP

/*const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

require('./startup/sequelizeInit');


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(5000, () => console.log('Serveur démarré sur le port 5000'));
*/


const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./startup/sequelizeInit'); // initialise Sequelize + synchronisation

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const produitRoutes = require('./routes/produits');
app.use('/api/produits', produitRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API Artisan 🎨🔧');
});


// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});


