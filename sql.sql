---------------------------------------------------------------------------
---------------------------------- DROPS ----------------------------------
---------------------------------------------------------------------------

DROP SEQUENCE IF EXISTS hibernate_sequence;
DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS candidato;

---------------------------------------------------------------------------
---------------------------------- CREATE ---------------------------------
---------------------------------------------------------------------------

CREATE SEQUENCE hibernate_sequence
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

----------

CREATE TABLE IF NOT EXISTS status
(
    id uuid NOT NULL,
	nome varchar(255) NOT NULL,
    updated_on timestamp with time zone NOT NULL,
    removed_on timestamp with time zone,
    CONSTRAINT status_pkey PRIMARY KEY (id)
);
CREATE INDEX status_removed_on_idx ON status (removed_on);

----------

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
---------------------------------- INSERT ---------------------------------
---------------------------------------------------------------------------

INSERT INTO status (id, nome, updated_on)
VALUES ('99280cfd-8d61-4c48-9099-bfaecac9e3b3', 'Candidatado', now());

INSERT INTO status (id, nome, updated_on)
VALUES ('0e1309dd-4769-4476-98ef-6e0e90775fbc', 'Lógico', now());

INSERT INTO status (id, nome, updated_on)
VALUES ('26af60e7-7910-4231-a6b8-6fcaf46cdfbe', 'Case', now());

INSERT INTO status (id, nome, updated_on)
VALUES ('03584644-7c4d-4422-ba7f-8710c1c3b0e4', 'Entrevista', now());

INSERT INTO status (id, nome, updated_on)
VALUES ('95aab4dc-1f73-489f-a79d-872104647a2b', 'Stand by', now());

INSERT INTO status (id, nome, updated_on)
VALUES ('9578501d-9679-4097-8378-441f25426e63', 'Aprovado', now());

INSERT INTO status (id, nome, updated_on)
VALUES ('7b1cf9d7-3341-4d8d-b3d2-a529f52241a2', 'Reprovado', now());

----------

INSERT INTO candidato (id, nome, cpf, email, data_nascimento, cidade, curriculo, link_repositorio, status, updated_on)
VALUES (
    '1b727c10-8c6e-46f1-ab12-f89ad27c0cfe',
    'Vicente Gabriel',
    '77298701002',
    'vicente@email.com',
    '1996-04-21 12:00:00.016 -0300',
    'Guarapuava',
    'https://github.com/SabrinaKaren/ps-graphQL-back-front/blob/main/assets/curriculo_pessoa1.pdf',
    'https://github.com/SabrinaKaren/ps-graphQL-back-front',
    '03584644-7c4d-4422-ba7f-8710c1c3b0e4',
    now()
);

INSERT INTO candidato (id, nome, cpf, email, data_nascimento, cidade, curriculo, link_repositorio, status, updated_on)
VALUES (
    'de098786-94d7-4d26-a89e-9a446e452880',
    'Catarina Antonella',
    '01174307498',
    'catarina@email.com',
    '2000-07-16 12:00:00.016 -0300',
    'Rio Verde',
    'https://github.com/SabrinaKaren/ps-graphQL-back-front/blob/main/assets/curriculo_pessoa2.pdf',
    'https://github.com/SabrinaKaren/graphQL-projects',
    '7b1cf9d7-3341-4d8d-b3d2-a529f52241a2',
    now()
);

---------------------------------------------------------------------------