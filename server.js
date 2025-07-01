const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
// initialise Sequelize + synchronisation




const sequelize = require("./config/sequelize");


const { Op } = require('sequelize');// Importer Sequelize et Op pour les opérateurs
// Op est utilisé pour les opérateurs de requête (like, in, etc.)
sequelize.Op = Op; // pour l'utiliser dans la route

const app = express();
app.use(cors());
app.use(express.json());


const homeRoute = require('./routes/home');
const topArtisanRoute = require('./routes/topArtisan');
const contentCatRoute = require('./routes/contentCat');
const searchRoute = require('./routes/search');


app.use('/api/categories', homeRoute);
app.use('/api/top-artisans', topArtisanRoute);
app.use('/api/categories', contentCatRoute);
app.use('/api/recherche', searchRoute);




// Servir les fichiers statiques de React (APRÈS les routes API)
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});


sequelize.sync().then(() => console.log("✅ Base de données synchronisée"));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});


