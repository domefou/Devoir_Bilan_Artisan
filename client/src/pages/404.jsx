import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import logoError from '../assets/img/dinosaur.png';

import '../styles/App.scss';
import '../styles/404.scss';

const NotFound = () => {
    return (
        <main>
            <Helmet>
                <title>Page non trouvée | Artisanat Local</title>
                <meta
                    name="description"
                    content="Oups… La page que vous cherchez n'existe pas. Retrouvez nos artisans locaux par catégorie ou revenez à l'accueil."
                />
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="container container_not_found text-center mt-5">

                <h1 className="title_404">error 404 : page introuvable.</h1>
                <div className="container_logo404">
                    <img src={logoError} className='logo_error' title="error" alt='Logo dinosaure pixel'></img>
                </div>
                <p className="text_404">Oups..
                    Veuillez nous excuser, cette page est actuellement en maintenance.</p>
                <p className="text_404">Page en
                    cours de construction...</p>
                <Link to="/" className="btn mt-3">
                    <p className="text_btn">Retour à l'accueil</p></Link>
            </div>
        </main>

    );
};

export default NotFound;
