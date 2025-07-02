import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ← Ajout
import API from '../API';

import Card from '../components/Card';
import '../styles/desktop_tablet/searchBar.scss';
import '../styles/mobile/searchBar.scss';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [resultats, setResultats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation(); // ← Ajout

    // Réinitialiser la recherche à chaque changement de route
    useEffect(() => {
        setResultats([]);
        setQuery('');
        setError(null);
    }, [location]); // ← Cette dépendance déclenche le reset quand la page change

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await API.get(`/recherche/?nom=${query}`);
            console.log("✅ Résultat API :", res.data);
            setResultats(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            console.error("❌ Erreur API :", err);
            setError("Impossible de récupérer les artisans.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid search_container mt-4">
            <form onSubmit={handleSearch} className="search_form d-flex">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Rechercher un artisan..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Recherche..." : "Rechercher"}
                </button>
            </form>

            {error && <p className="text-danger mt-3">{error}</p>}

            <div className="container-fluid">
                {loading ? (
                    <p className="text-muted text-center">Chargement...</p>
                ) : resultats.length > 0 ? (
                    <Card artisans={resultats} />
                ) : query !== "" ? (
                    <p className="text-muted text-center mt-3">Aucun artisan correspondant.</p>
                ) : null}
            </div>
        </div>
    );
}

export default SearchBar;


