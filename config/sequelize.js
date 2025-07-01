const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,     // artisan_db
  process.env.DB_USER,     // artisan_db_58bc_user
  process.env.DB_PASSWORD, // ton mot de passe
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  // facultatif, par défaut 5432
    dialect: 'postgres',        // 🔄 avant c'était 'mysql'
    logging: false              // facultatif, pour éviter les logs SQL
  }
);

module.exports = Sequelize;
