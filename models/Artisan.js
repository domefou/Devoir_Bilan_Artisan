const { DataTypes } = require('sequelize');
const Sequelize = require('../config/sequelize'); // Assure-toi d'avoir une connexion Sequelize configurée

const Artisan = Sequelize.define('Artisan', {
    id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    specialite: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    note: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
    ville: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    a_propos: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    web: {
        type: DataTypes.STRING(120),
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    categorie: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
}, {
    tableName: 'artisan',
    timestamps: true, // Sequelize gère automatiquement createdAt et updatedAt
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Artisan;
// Assure-toi d'importer et de synchroniser ce modèle dans ton fichier principal (par exemple, server.js) pour qu'il soit pris en compte par Sequelize.