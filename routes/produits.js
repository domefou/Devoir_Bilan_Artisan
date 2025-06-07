const express = require('express');
const router = express.Router();
const Produit = require('../models/Produit');

// GET /api/produits — tous les produits
router.get('/', async (req, res) => {
  try {
    const produits = await Produit.findAll(); // récupère tout depuis la table
    res.json(produits);
  } catch (err) {
    console.error('Erreur lors du GET /produits :', err.message);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

module.exports = router;


// POST un nouveau produit