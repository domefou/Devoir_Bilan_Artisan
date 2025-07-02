import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import API from '../API';
import Card from "../components/Card"; // ✅ Importation du composant

import '../styles/fonts.scss';
import '../styles/App.scss';
import '../styles/homePage.scss';

const Home = () => {
    const [topArtisans, setTopArtisans] = useState([]);

    useEffect(() => {
        API.get(`/top-artisans`)
            .then((response) => {
                console.log("✅ Meilleurs artisans reçus :", response.data);
                setTopArtisans(response.data);
            })
            .catch((error) => {
                console.error("❌ Erreur récupération meilleurs artisans :", error);
            });
    }, []);

    return (
        <main>
            <Helmet>
                <title>Accueil | Trouver un artisan près de chez vous</title>
                <meta
                    name="description"
                    content="Trouvez facilement un artisan qualifié selon votre besoin : bâtiment, services, alimentation et plus encore."
                />
                <meta
                    name="keywords"
                    content="artisan, services, bâtiment, fabrication, alimentation"
                />
            </Helmet>

            <div className="body_home">
                <h1>Comment trouver mon artisan ?</h1>
                <ul>
                    <li>Choisir la catégorie d’artisanat dans le menu (onglet “Trouve ton artisan”) .</li>
                    <li>Choisir un artisan.</li>
                    <li>Le contacter via le formulaire de contact.</li>
                    <li>Une réponse sera apportée sous 48h.</li>
                </ul>
            </div>
            <div className="container-fluid home_container">
                <h2>Découvrez notre top 3 des Artisans du mois.</h2>
                {/* ✅ Utilisation de ton composant Card avec les artisans */}
                <Card artisans={topArtisans} />
            </div>
        </main>

    );
};

export default Home;




