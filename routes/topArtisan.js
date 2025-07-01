const express = require('express');
const router = express.Router();
const Artisan = require('../models/Artisan');

router.get('/', async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({
            attributes: ['nom', 'specialite', 'note', 'ville', 'a_propos', 'email', 'web', 'categorie'],
            order: [['note', 'DESC']], // ✅ Trie par note décroissante
            limit: 3 // ✅ Limite à 3 artisans
        });

        console.log("🔹 Meilleurs artisans trouvés :", topArtisans.map(a => `${a.nom} - ${a.note}`));
        res.json(topArtisans);
    } catch (error) {
        console.error("❌ Erreur récupération des meilleurs artisans :", error);
        res.status(500).json({ message: "Erreur serveur", details: error.message });
    }
});

module.exports = router;