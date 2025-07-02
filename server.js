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
app.use(express.json());


app.use(cors({
  origin: 'https://ton-frontend.onrender.com' // remplace par l’URL Render du frontend
}));



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


sequelize.sync({ alter: true })
  .then(() => console.log('✅ Table artisan synchronisée avec succès'))
  .catch(err => console.error('❌ Erreur de synchronisation :', err));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});


