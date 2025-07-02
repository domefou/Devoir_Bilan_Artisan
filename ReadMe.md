# 🛠️ Devoir Bilan Artisan

Devoir Bilan Artisan est une application full-stack permettant d'importer, gérer et afficher des artisans locaux à partir d’un fichier CSV.  
Elle repose sur une base de données PostgreSQL, un backend Express/Sequelize, et une interface utilisateur React.

---

## 📁 Structure du projet

```
devoir_bilan_artisan/
├── server.js                  # Backend Express
├── models/                    # Modèles Sequelize
├── config/                    # Configuration Sequelize & .env
├── scripts/importArtisans.js  # Importation CSV → PostgreSQL
├── assets/data/data.csv       # Données artisanales
├── client/                    # Frontend React
└── README.md                  # Documentation
```

---

## 🚀 Lancer le projet en local

### 📋 Prérequis

- Node.js v18+
- PostgreSQL

### ⚙️ Fichier `.env` à la racine

```
DB_NAME=artisan_db_ck05
DB_USER=artisan_db_ck05_user
DB_PASSWORD=motDePasse
DB_HOST=dpg-xxxx.frankfurt-postgres.render.com
DB_PORT=5432
```

### 📥 Installation

```bash
npm install
cd client && npm install
```

### 🔧 Démarrer les serveurs (backend + frontend)

```bash
npm run dev
```
> Cette commande utilise `nodemon` pour le backend et `concurrently` pour lancer React en parallèle.

---

## 📁 Importer le fichier CSV

```bash
node scripts/importArtisans.js
```
- Lecture de `assets/data/data.csv`
- Mappage vers le modèle Artisan
- Insertion des données via Sequelize
- Gestion des doublons avec `findOrCreate`

---

## 🖥️ Déploiement sur Render

1. Pousser le projet sur GitHub
2. Créer un Web Service Node sur Render
3. Configuration :
   - **Build command** : `npm install`
   - **Start command** : `node server.js`
   - **Root Directory** : `.`
   - Ajouter les variables d’environnement comme dans `.env`

---

## 📘 API Express

| Méthode | Route                        | Description                                 |
|---------|------------------------------|---------------------------------------------|
| GET     | `/api/categories`            | Liste des catégories d’artisans             |
| GET     | `/api/top-artisans`          | Top 3 artisans par note                     |
| GET     | `/api/categories/:categorie` | Artisans d’une catégorie                    |
| GET     | `/api/recherche?nom=...`     | Recherche d’artisan par nom                 |

---

## 📦 Exemples de requêtes

### POST `/contact` (exemple à implémenter)

```json
{
  "nom": "Marie",
  "email": "marie@example.com",
  "message": "Bonjour",
  "artisanId": 2
}
```

### GET `/health/db` (exemple de réponse)

```json
{
  "status": "ok",
  "artisans_count": 41
}
```

---

## 📚 Technologies utilisées

| Côté      | Outils                                 |
|-----------|----------------------------------------|
| Frontend  | React, React Bootstrap, React Router, Sass |
| Backend   | Express, Sequelize, dotenv             |
| Base      | PostgreSQL, pg, pg-hstore              |
| CSV       | csv-parser, fs-extra                   |
| Dev Tools | Nodemon, Concurrently                  |

---

## 👤 Auteur

Ce projet a été réalisé dans le cadre d’un devoir bilan, afin de mettre en œuvre une stack complète autour de l’artisanat