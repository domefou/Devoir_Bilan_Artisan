import { useEffect, useState } from "react";
import API from '../API'; // ✅ Importation de l'API
import { NavLink } from "react-router-dom";
import LogoNav from "../assets/img/Logo_def.png"; // ✅ Importation de l'image du logo

import '../styles/desktop_tablet/NavBar_D.scss';
import '../styles/mobile/NavBar_M.scss';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        API.get(`/categories`)
            .then((res) => {
                setCategories(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('❌ Erreur chargement catégories :', err);
                setError("Échec du chargement des catégories.");
                setLoading(false);
            });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="navbar navbar-expand-md navbar-light shadow">
            <div className="container-fluid container-navbar">
                <div className="container-img">
                    <NavLink className="navbar-brand" to="/">
                        <img src={LogoNav} className='ImgNavBar' title="Accueil" alt='Logo région rhones-alpes'></img>
                    </NavLink>
                </div>


                <button
                    onClick={handleToggle}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className={`collapse navbar-collapse onglet-container ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav onglet-list">
                        {/* 🔹 "Trouve ton artisan" -> Fond vert */}
                        <li className="nav-item dropdown menu-artisan">
                            <span
                                className="nav-link dropdown-toggle artisan_btn"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ><p>Trouve ton artisan</p>

                            </span>
                            <ul className="dropdown-menu artisan-list">
                                {loading ? (
                                    <li className="dropdown-item text-muted artisan-link"><p>Chargement...</p></li>
                                ) : error ? (
                                    <li className="dropdown-item text-danger artisan-link">{error}</li>
                                ) : (
                                    categories.map((cat, index) => (
                                        <li key={index}>
                                            <NavLink className="dropdown-item artisan-link" to={`/categories/${cat}`} onClick={handleLinkClick}>
                                                <p>{cat}</p>
                                            </NavLink>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </li>

                        {/* 🔹 Autres menus -> Fond bleu */}
                        <li className="nav-item dropdown menu-standart">
                            <span
                                className="nav-link dropdown-toggle standart_btn"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ><p>Vie pratique</p>

                            </span>
                            <ul className="dropdown-menu standart-list">
                                <li ><NavLink className="dropdown-item standard-link" to="/Vie_pratique/Venir_à_la_région" onClick={handleLinkClick}><p>Venir à la région</p></NavLink></li>
                                <li ><NavLink className="dropdown-item standard-link" to="/Vie_pratique/Marché_publics" onClick={handleLinkClick}><p>Marché publics</p></NavLink></li>
                                <li ><NavLink className="dropdown-item standard-link" to="/Vie_pratique/Presse" onClick={handleLinkClick}><p>Presse</p></NavLink></li>
                            </ul>
                        </li>

                        <li className="menu-standart">

                            <NavLink className="nav-link contact_btn" to="/Contact" onClick={handleLinkClick}><p>Contact</p></NavLink>

                        </li>

                        <li className="nav-item dropdown menu-standart">
                            <span
                                className="nav-link dropdown-toggle standart_btn"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ><p>Préférences</p>

                            </span>
                            <ul className="dropdown-menu standart-list">
                                <li><NavLink className="dropdown-item standard-link" to="/Préférences/Mentions_légales" onClick={handleLinkClick}><p>Mentions légales</p></NavLink></li>
                                <li><NavLink className="dropdown-item standard-link" to="/Préférences/Données_personnelles" onClick={handleLinkClick}><p>Données personnelles</p></NavLink></li>
                                <li><NavLink className="dropdown-item standard-link" to="/Préférences/Accessibilités" onClick={handleLinkClick}><p>Accessibilités</p></NavLink></li>
                                <li><NavLink className="dropdown-item standard-link" to="/Préférences/Politique_des_cookies" onClick={handleLinkClick}><p>Politique des cookies</p></NavLink></li>
                                <li><NavLink className="dropdown-item standard-link" to="/Préférences/Gestion_des_cookies" onClick={handleLinkClick}><p>Gestion des cookies</p></NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default NavBar;
