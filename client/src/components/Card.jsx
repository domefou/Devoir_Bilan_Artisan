import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


import "../styles/desktop_tablet/card.scss";
import "../styles/mobile/card.scss";


const renderStars = (note) => {
    const maxStars = 5;
    const filledStars = Math.round(note);

    return Array.from({ length: maxStars }, (_, i) =>
        i < filledStars ? '⭐' : '☆'
    ).join('');
};

const Card = ({ artisans }) => {
    console.log("🔹 Artisans reçus par Card.jsx :", artisans);
    const [artisanActuel, setArtisanActuel] = useState(null);


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 mt-2 card_container" href="navTo">
            {Array.isArray(artisans) && artisans.length > 0 ? (
                artisans.map((artisan, index) => (
                    <NavLink
                        to={`/artisan/${encodeURIComponent(artisan.nom)}`}
                        state={{ artisan }}
                        className="col card"
                        key={index}
                    >
                        <div className="card_main">
                            <div className="card-body">
                                <h5 className="card-title">{artisan.nom}</h5>
                                <p className="card-text">
                                    {artisan.note !== null ? (
                                        <>
                                            <span>{renderStars(artisan.note)}</span>
                                            <br />
                                            <small className="text-muted">{artisan.note}/5</small>
                                        </>
                                    ) : (
                                        "Pas de note"
                                    )}
                                </p>
                                <strong>🏙️ Ville : {artisan.ville ?? "Ville inconnue"}</strong>
                                <br />
                                <small className="text-muted">
                                    🗂 Spécialité : {artisan.specialite}
                                </small>
                                <p className=' detail'>Cliquez pour plus de detail</p>
                            </div>
                        </div>
                    </NavLink>
                ))
            ) : (
                <p className="text-muted text-center">Aucun artisan trouvé pour cette catégorie.</p>
            )}
        </div>

    );
};

export default Card;






