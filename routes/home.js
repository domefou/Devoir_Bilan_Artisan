const express = require('express');
const router = express.Router();
const Artisan = require('../models/Artisan');

router.get('/', async (req, res) => {
    try {
        const categories = await Artisan.findAll({
            attributes: ['categorie'], // ✅ Sélectionne uniquement la catégorie
            group: ['categorie'], // ✅ Évite les doublons en regroupant par catégorie
            order: [['categorie', 'ASC']] // ✅ Trie les catégories par ordre alphabétique
        });

        console.log("🔹 Catégories trouvées :", categories.map(cat => cat.categorie));

        res.json(categories.map(cat => cat.categorie)); // ✅ Envoie uniquement un tableau de noms de catégories
    } catch (error) {
        console.error("❌ Erreur lors de la récupération des catégories :", error);
        res.status(500).json({ message: "Erreur serveur", details: error.message });
    }
});

module.exports = router;