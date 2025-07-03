-- SCHEMA: public

-- DROP SCHEMA IF EXISTS public ;

CREATE SCHEMA IF NOT EXISTS public AUTHORIZATION artisan_db_ck05_user;

COMMENT ON SCHEMA public IS 'standard public schema';

GRANT USAGE ON SCHEMA public TO PUBLIC;

GRANT ALL ON SCHEMA public TO artisan_db_ck05_user;