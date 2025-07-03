# 🎨 Projet Artisanat Local — Développé avec Create React App (FRONTEND)

Bienvenue dans le projet **Artisanat Local**, une application React permettant de découvrir des artisans par spécialité, ville, note et catégorie.  
Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

Aperçu visuel : captures d’écran depuis public/assets

## 🚀 Fonctionnalités

- Recherche d’artisans par nom, catégorie ou ville (insensible à la casse)
- Fiches individuelles avec informations détaillées (email, site, note, logo, description)
- Contact rapide via un formulaire mail automatisé
- Meta descriptions dynamiques avec React Helmet pour améliorer le SEO
- Page 404 personnalisée avec visuel et retour vers l’accueil
- Données servies par une API Express connectée à PostgreSQL


## Commandes (installer les dépendences):

*Les installations recquise situé dans le fichier ReadMe.md (backend) sont recquise pour continuer.




## 🔧 Scripts disponibles

Dans le répertoire du projet, tu peux exécuter :

### `npm start`

Lance l'application en mode développement.  
Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.  
La page se rechargera automatiquement à chaque modification.

### `npm test`

Lance les tests en mode interactif.  
Voir [exécution des tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d’infos.

### `npm run build`

Crée une version optimisée pour la production dans le dossier `build`.  
Les fichiers sont minifiés et prêts à être déployés.

### `npm run eject`

Opération irréversible.  
Si tu veux personnaliser Webpack, Babel ou ESLint, ce script te donne un contrôle total.  
À n'utiliser qu'en dernier recours.


## 🌐 Déploiement

Le projet est hébergé sur Render :

- 🖥️ **Frontend** : [https://devoir-bilan-artisan-client.onrender.com](https://devoir-bilan-artisan-client.onrender.com)  
- 🔌 **Backend (API Express)** : [https://devoir-bilan-artisan.onrender.com](https://devoir-bilan-artisan.onrender.com)

## 📦 Backend Express / PostgreSQL

- Routes : `/api/top-artisans`, `/api/categories`, `/api/recherche`
- CORS configuré pour Render
- Base de données PostgreSQL hébergée chez Render avec schéma SQL et contraintes


## 🛠️ Auteur
 
**GitHub** : [@lecoultre](https://github.com/lecoultre)


