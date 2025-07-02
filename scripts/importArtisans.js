const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const sequelize = require('../config/sequelize');
const Artisan = require('../models/Artisan');
require('dotenv').config();

const filePath = path.join(__dirname, '../assets/data/data.csv');

(async () => {
  try {
    await sequelize.authenticate();
    const [dbInfo] = await sequelize.query('SELECT current_database();');
    console.log('🧠 Base PostgreSQL utilisée par Sequelize :', dbInfo[0].current_database);

    let inserted = 0;
    let skipped = 0;

    fs.createReadStream(filePath, { encoding: 'utf8' })
      .pipe(csv({ separator: ';' }))
      .on('data', async (row) => {
        try {
          console.log('📄 Ligne CSV brute :', row);

          const formattedRow = {
            nom: row['Nom'],
            specialite: row['Spécialité'],
            note: parseFloat(row['Note'].replace(',', '.')),
            ville: row['Ville'],
            a_propos: row['A propos'],
            email: row['Email'],
            web: row['Site Web'] && row['Site Web'].trim() !== '' ? row['Site Web'] : null,
            categorie: row['Catégorie'],
            logo: null
          };

          const [artisan, created] = await Artisan.findOrCreate({
            where: { email: formattedRow.email },
            defaults: formattedRow
          });

          if (created) {
            inserted++;
            console.log(`✅ Artisan inséré : ${formattedRow.nom}`);
          } else {
            skipped++;
            console.log(`🔁 Artisan déjà existant (email) : ${formattedRow.email}`);
          }

        } catch (err) {
          if (err.name === 'SequelizeValidationError') {
            console.error('🔎 Erreurs de validation :');
            err.errors.forEach(e => console.error(`- ${e.message}`));
          } else {
            console.error('❌ Erreur inattendue :', err.message);
          }
          console.error('🛑 Ligne ignorée :', row);
        }
      })
      .on('end', async () => {
        console.log(`\n🎉 Importation terminée !`);
        console.log(`✨ ${inserted} artisans ajoutés`);
        console.log(`🔁 ${skipped} doublons ignorés`);
        await sequelize.close();
      });

  } catch (err) {
    console.error('❌ Erreur de connexion à la base :', err.message);
  }
})();


// Ce script lit un fichier CSV contenant des informations sur des artisans et les insère dans une base de données PostgreSQL.
// Il utilise Sequelize pour gérer les interactions avec la base de données et le module csv-parser pour lire le fichier CSV.
// Les artisans sont insérés dans la table "Artisan" avec des validations pour éviter les doublons basés sur l'email.





//node scripts/importArtisans.js
// Pour exécuter ce script, assurez-vous que le fichier CSV est correctement formaté et que le modèle Artisan est défini.