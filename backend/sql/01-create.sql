CREATE SEQUENCE hibernate_sequence
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS status
(
    id uuid NOT NULL,
	nome varchar(255) NOT NULL,
    updated_on timestamp with time zone NOT NULL,
    removed_on timestamp with time zone,
    CONSTRAINT status_pkey PRIMARY KEY (id)
);
CREATE INDEX status_removed_on_idx ON status (removed_on);

---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS candidato
(
    id uuid NOT NULL,
    nome varchar(255) NOT NULL,
    cpf varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    data_nascimento timestamp with time zone NOT NULL,
    cidade varchar(50) NOT NULL,
    curriculo varchar(255) NOT NULL,
    link_repositorio varchar(255) NOT NULL,
    status uuid NOT NULL,
    updated_on timestamp with time zone NOT NULL,
    removed_on timestamp with time zone,
    CONSTRAINT candidato_pkey PRIMARY KEY (id)
);
CREATE INDEX candidato_removed_on_idx ON candidato (removed_on);
CREATE UNIQUE INDEX candidato_cpf_udx ON candidato (nome, cpf);

---------------------------------------------------------------------------