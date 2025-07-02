import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../API';
import Card from '../components/Card';
import '../styles/App.scss';

const CategoriePage = () => {
    const { nom_categorie } = useParams(); // ✅ Récupère le paramètre d'URL
    const [artisans, setArtisans] = useState([]); // ✅ Initialise artisans avec un tableau vide
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect exécuté avec nom_categorie :", nom_categorie);
        if (nom_categorie) {
            const apiUrl = `api/categories/${encodeURIComponent(nom_categorie)}`;
            console.log("🔹 Requête API envoyée :", apiUrl);

            API.get(apiUrl)
                .then((res) => {
                    console.log("✅ Réponse API reçue :", res.data);
                    setArtisans(Array.isArray(res.data) ? res.data : []);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("❌ Erreur API :", err);
                    setError("Impossible de charger les artisans.");
                    setLoading(false);
                });
        }
    }, [nom_categorie]);

    return (
        <main>
            <div className="container-fluid categorie_container mt-4">
                <h1>Artisans de la catégorie : <strong>{nom_categorie}</strong></h1> {/* ✅ Affichage dynamique */}

                {loading ? (
                    <p className="text-muted">Chargement en cours...</p> // ✅ Affichage d'un message de chargement
                ) : error ? (
                    <p className="text-danger">{error}</p> // ✅ Affichage d'une erreur
                ) : artisans.length > 0 ? (
                    <Card artisans={artisans} /> // ✅ Passe les artisans récupérés à Card.jsx
                ) : (
                    <p>Aucun artisan trouvé pour cette catégorie</p> // ✅ Message en cas de données vides
                )}

            </div>
        </main>

    );
};

export default CategoriePage;




