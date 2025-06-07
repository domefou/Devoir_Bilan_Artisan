// Ce fichier définit le modèle Produit pour Sequelize
// Assurez-vous d'avoir installé les dépendances nécessaires : npm install sequelize mysql2 dotenv
// son utilisation est de représenter la table 'produits' dans la base de données
// Ce modèle inclut les champs 'nom', 'prix' et 'description' avec leurs types et contraintes respectifs
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // chemin vers ta config Sequelize

const Produit = sequelize.define('Produit', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'produits',
  timestamps: false
});

module.exports = Produit;
