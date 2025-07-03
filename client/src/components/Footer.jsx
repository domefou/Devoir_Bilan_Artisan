import React from 'react';
import { NavLink } from "react-router-dom";

import LogoNav from "../assets/img/Logo_def.png";

import '../styles/desktop_tablet/footer.scss';
import '../styles/mobile/footer.scss';


const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_img'>
                <NavLink className="navbar-brand" to="/">
                    <img src={LogoNav} className='ImgNavBar' title="Accueil" alt='Logo région rhones-alpes'></img>
                </NavLink>
            </div>



            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-2 mt-2 footer_location">

                <div className='col location'>
                    <h3>Conseil Régionnal
                        <br />
                        Auvergne Rhônes-Alpes</h3>
                </div>
                <div className='col location'>
                    <h3>Lyon</h3>
                    <a href="https://www.bing.com/maps?q=101+cours+Charlemagne+CS+20033+69269+LYON+CEDEX+02+France&FORM=HDRSC6&cp=45.740676%7E4.819365&lvl=15.7"
                        target="_blank"
                        rel="noopener noreferrer">
                        101 cours Charlemagne<br />
                        CS 20033<br />
                        69269 LYON CEDEX 02<br />
                        France
                    </a>
                    <br />
                    <a href='tel:+33426734000'>+33 (0)4 26 73 40 00</a><br />
                    <p>
                        Accueil télephonique du lundi au vendredi
                        de 8h à 17h
                    </p>
                </div>
                <div className='col location'>
                    <h3>Clermont-ferrand</h3>
                    <a href="https://www.bing.com/maps?pglt=297&q=59+boulevard+L%C3%A9on+Jouhaux+CS+90706+63050+Clermond-Ferrand+CEDEX+02+France&cvid=a1ed46ffd41a4a078015d3f4c7bb10cc&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCDExNjBqMGoxqAIIsAIB&FORM=ANNTA1&PC=ASTS"
                        target="_blank"
                        rel="noopener noreferrer">
                        59 boulevard Léon Jouhaux<br />
                        CS 90706<br />
                        63050 Clermond-Ferrand CEDEX 02<br />
                        France
                    </a>
                    <br />
                    <a href='tel:+33426734000'>+33 (0)4 26 73 40 00</a>
                    <p>Accueil télephonique du lundi au vendredi
                        de 8h à 17h
                    </p>
                </div>
            </div>


            <div className="link_container">
                <ul className="footer-list">
                    <li><NavLink to="/Vie_pratique/Venir_à_la_région"><p>Venir à la région</p></NavLink></li>
                    <li><NavLink to="/Vie_pratique/Marché_publics"><p>Marché publics</p></NavLink></li>
                    <li><NavLink to="/Vie_pratique/Presse"><p>Presse</p></NavLink></li>

                    <li><NavLink to="/Contact"><p>Contact</p></NavLink></li>

                    <li><NavLink to="/Préférences/Mentions_légales"><p>Mentions légales</p></NavLink></li>
                    <li><NavLink to="/Préférences/Données_personnelles" ><p>Données personnelles</p></NavLink></li>
                    <li><NavLink to="/Préférences/Accessibilités"><p>Accessibilités</p></NavLink></li>
                    <li><NavLink to="/Préférences/Politique_des_cookies"><p>Politique des cookies</p></NavLink></li>
                    <li><NavLink to="/Préférences/Gestion_des_cookies"><p>Gestion des cookies</p></NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;



