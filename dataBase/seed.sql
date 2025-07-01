INSERT INTO
    categories (nom_categorie)
VALUES ('Bâtiments'),
    ('Services'),
    ('Fabrications'),
    ('Alimentations');

INSERT INTO
    specialites (nom_specialite, id_categorie)
VALUES ('Maçonnerie', 1),
    ('Plomberie', 1),
    ('Électricité', 1),
    ('Coiffure', 2),
    ('Nettoyage', 2),
    ('Menuiserie', 3),
    ('Serrurerie', 3),
    ('Boulangerie', 4),
    ('Boucherie', 4);

INSERT INTO
    ville (nom_ville, id_specialite)
VALUES ('Paris', 1),
    ('Lyon', 2),
    ('Nantes', 3),
    ('Marseille', 4),
    ('Toulouse', 5);

INSERT INTO
    coordonnees (
        nom,
        prenom,
        telephone,
        email,
        id_ville
    )
VALUES (
        'Dupont',
        'Jean',
        '0601020304',
        'jean.dupont@example.com',
        1
    ),
    (
        'Martin',
        'Claire',
        '0605060708',
        'claire.martin@example.com',
        2
    ),
    (
        'Durand',
        'Luc',
        '0611121314',
        'luc.durand@example.com',
        3
    );

INSERT INTO
    note (
        valeur_note,
        commentaire,
        id_coordonnees
    )
VALUES (5, 'Excellent travail !', 1),
    (4, 'Très bon service', 2),
    (
        3,
        'Correct mais améliorable',
        3
    );

INSERT INTO
    site_web (url, id_coordonnees)
VALUES (
        'https://www.jeandupont-artisan.fr',
        1
    ),
    (
        'https://www.clairemartin-services.com',
        2
    ),
    (
        'https://www.lucdurand-menuiserie.fr',
        3
    );