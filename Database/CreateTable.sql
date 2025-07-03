-- Table: public.artisan

-- DROP TABLE IF EXISTS public.artisan;


CREATE TABLE IF NOT EXISTS public.artisan
(
    id_artisan integer NOT NULL DEFAULT nextval('artisan_id_artisan_seq'::regclass),
    nom character varying(80) COLLATE pg_catalog."default" NOT NULL,
    specialite character varying(80) COLLATE pg_catalog."default" NOT NULL,
    note numeric(2,1) NOT NULL,
    ville character varying(80) COLLATE pg_catalog."default" NOT NULL,
    a_propos text COLLATE pg_catalog."default",
    email character varying(120) COLLATE pg_catalog."default" NOT NULL,
    web character varying(120) COLLATE pg_catalog."default",
    categorie character varying(90) COLLATE pg_catalog."default" NOT NULL,
    logo character varying(255) COLLATE pg_catalog."default",
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT artisan_pkey PRIMARY KEY (id_artisan),
    CONSTRAINT artisan_email_key UNIQUE (email),
    CONSTRAINT artisan_note_check CHECK (note >= 0::numeric AND note <= 5::numeric)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.artisan OWNER to artisan_db_ck05_user;