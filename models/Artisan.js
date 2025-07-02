const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // ton instance Sequelize PostgreSQL

const Artisan = sequelize.define('Artisan', {
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
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'artisan',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Artisan;