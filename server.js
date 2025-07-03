const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
// initialise Sequelize + synchronisation

const rateLimit = require('express-rate-limit');







const sequelize = require("./config/sequelize");


const { Op } = require('sequelize');// Importer Sequelize et Op pour les opérateurs
// Op est utilisé pour les opérateurs de requête (like, in, etc.)
sequelize.Op = Op; // pour l'utiliser dans la route

const app = express();
app.use(express.json());


const corsOptions = {
  origin: 'https://devoir-bilan-artisan-client.onrender.com',
  credentials: true
};

app.use(cors(corsOptions));


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limite chaque IP à 100 requêtes par fenêtre
  standardHeaders: true, // retourne les infos de limite dans les headers
  legacyHeaders: false, // désactive les anciens headers
});

app.use(limiter); // applique le limiteur à toutes les routes



const homeRoute = require('./routes/home');
const topArtisanRoute = require('./routes/topArtisan');
const contentCatRoute = require('./routes/contentCat');
const searchRoute = require('./routes/search');


app.use('/api/categories', homeRoute);
app.use('/api/top-artisans', topArtisanRoute);
app.use('/api/categories', contentCatRoute);
app.use('/api/recherche', searchRoute);



/*
Servir les fichiers statiques de React (APRÈS les routes API)

app.use(express.static(path.join(__dirname, "client/build")));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

*/


sequelize.sync({ alter: true })
  .then(() => console.log('✅ Table artisan synchronisée avec succès'))
  .catch(err => console.error('❌ Erreur de synchronisation :', err));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});


