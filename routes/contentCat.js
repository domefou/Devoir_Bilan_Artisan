const express = require('express');
const router = express.Router();
const Artisan = require('../models/Artisan');

router.get('/:nom_categorie', async (req, res) => {
    const { nom_categorie } = req.params;
    console.log("Catégorie reçue dans le serveur :", nom_categorie);

    try {
        // 🔍 Récupération des artisans filtrés par catégorie
        const artisans = await Artisan.findAll({
            where: { categorie: nom_categorie }, // ✅ Filtre sur la catégorie
            attributes: [
                'id_artisan', 'nom', 'specialite', 'note', 'ville', 'a_propos', 'email', 'web', 'categorie', 'created_at', 'updated_at'
            ]
        });

        console.log(`🔹 Nombre d'artisans trouvés : ${artisans.length}`);
        console.log("Données des artisans :", artisans);

        res.json(artisans);
    } catch (error) {
        console.error("❌ Erreur lors de la recherche des artisans :", error);
        res.status(500).json({ message: "Erreur serveur", details: error.message });
    }
});

module.exports = router;