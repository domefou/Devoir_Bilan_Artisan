const express = require('express');
const router = express.Router();
const Artisan = require('../models/Artisan');

const sequelize = require("../config/sequelize");

const { Op } = require('sequelize');// Importer Sequelize et Op pour les opérateurs
// Op est utilisé pour les opérateurs de requête (like, in, etc.)
sequelize.Op = Op; // pour l'utiliser dans la route


router.get('/', async (req, res) => {
    const { nom } = req.query;

    if (!nom) {
        return res.status(400).json({ message: "Veuillez fournir un nom à rechercher." });
    }

    try {
        // 🔍 Recherche d'artisans dont le nom correspond à la requête
        const resultats = await Artisan.findAll({
            where: {
                nom: {
                    [Op.iLike]: `%${nom}%` // ✅ Permet une recherche insensible à la casse (PostgreSQL)
                    // [Op.like]: `%${nom}%` ✅ Permet une recherche partielle SQL
                }
            },
            attributes: ['id_artisan', 'nom', 'specialite', 'note', 'ville', 'a_propos', 'email', 'web', 'categorie', 'created_at', 'updated_at'],
            order: [['note', 'DESC']] // ✅ Trie les résultats par note décroissante
        });

        console.log(`🔹 Nombre d'artisans trouvés : ${resultats.length}`);
        console.log("Données des artisans :", resultats);

        if (resultats.length === 0) {
            return res.status(404).json({ message: "Aucun artisan trouvé avec ce nom." });
        }

        res.json(resultats);
    } catch (error) {
        console.error("❌ Erreur lors de la recherche d'un artisan :", error);
        res.status(500).json({ message: "Erreur serveur", details: error.message });
    }
});

module.exports = router;