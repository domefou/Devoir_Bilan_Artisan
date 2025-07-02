import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useState } from "react";
import '../styles/desktop_tablet/artisan.scss';

import NoPhoto from "../assets/img/NoPhotos.png";

const Artisan = () => {
    const location = useLocation();
    const artisan = location.state?.artisan;

    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        objet: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    if (!artisan) return <p>Aucun artisan trouvé. Veuillez revenir à la page précédente.</p>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:${artisan.email}?subject=${encodeURIComponent(formData.objet)}&body=${encodeURIComponent(
            `Message de : ${formData.nom} (${formData.email})\n\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;

        setSuccessMessage("✅ Votre message a été préparé. Vous pouvez maintenant l’envoyer depuis votre logiciel de messagerie.");
        setFormData({ nom: '', email: '', objet: '', message: '' });
    };

    return (
        <div className="fiche-artisan-page">
            <Helmet>
                <title name="fiche artisan"></title>
                <meta name="description" content="Retrouvez tout les details de votre artisan ici" />
            </Helmet>
            <div className="fiche-artisan-card">
                <h1 className="title_detail">{artisan.nom}</h1>
                <img
                    src={artisan.logo ? artisan.logo : NoPhoto}
                    title="logo artisan"
                    alt={`Logo de ${artisan.nom}`}
                    className="img_profil"
                />

                <p className="text_detail"><span>Email :</span>{" "}{artisan.email ? <a href={`mailto:${artisan.email}`} className="emailNone">{artisan.email}</a> : <span className="emailNone">Non fourni</span>}</p>
                <p className="text_detail"><span>Ville :</span> {artisan.ville || "Ville inconnue"}</p>
                <p className="text_detail"><span>Site web :</span>{" "}{artisan.web ? <a href={artisan.web} target="_blank" rel="noreferrer">{artisan.web}</a> : "Pas de site web"}</p>
                <p className="text_detail"><span>Note :</span> {artisan.note ?? "Aucune"} / 5</p>
                <p className="text_detail"><span>À propos :</span><br />{artisan.a_propos || "Information non disponible"}</p>
                <p className="text_detail"><span>Catégorie :</span>{" "}{artisan.categorie || artisan.specialite || "Non spécifiée"}</p>
            </div>

            {/* Formulaire de contact */}
            {artisan.email && (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Contacter l’artisan</h3>
                    <label>
                        Nom : *
                        <input type="text" name="nom" required value={formData.nom} onChange={handleChange} />
                    </label>
                    <label>
                        Email : *
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Objet : *
                        <input type="text" name="objet" required value={formData.objet} onChange={handleChange} />
                    </label>
                    <label>
                        Message :*
                        <textarea name="message" required rows="5" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    <small>* champ requis.</small>
                    <button className="btn_submit" type="submit">Envoyer</button>

                    {successMessage && (
                        <div className="success-message">
                            {successMessage}
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

export default Artisan;





