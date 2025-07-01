CREATE DATABASE IF NOT EXISTS artisan_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE artisan_db;

CREATE TABLE artisan (
    id_artisan INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(80) NOT NULL,
    specialite VARCHAR(80) NOT NULL,
    note DECIMAL(2, 1) NOT NULL CHECK (
        note >= 0
        AND note <= 5
    ), -- ✅ Note entre 0 et 5
    ville VARCHAR(80) NOT NULL,
    a_propos TEXT DEFAULT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    web VARCHAR(120) DEFAULT NULL,
    categorie VARCHAR(90) NOT NULL,
    logo Text DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- ✅ Date d'ajout automatique
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- ✅ Mise à jour automatique
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

LOAD DATA INFILE './artisan_db/data.csv' INTO
TABLE artisan FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (
    @nom,
    @specialite,
    @note,
    @ville,
    @a_propos,
    @email,
    @web,
    @categorie
)
SET
    nom = @nom,
    specialite = @specialite,
    note = CAST(
        REPLACE (@note, ',', '.') AS DECIMAL(5, 2)
    ), -- ✅ Convertit les `,` en `.` pour les décimaux
    ville = @ville,
    a_propos =
REPLACE (@a_propos, ';;', ';'), -- ✅ Corrige les séparateurs incohérents
    email = @email,
    web = @web,
    categorie = @categorie;