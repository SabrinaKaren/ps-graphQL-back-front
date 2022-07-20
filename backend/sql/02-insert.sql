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

---------------------------------------------------------------------------

INSERT INTO candidato (id, nome, cpf, email, data_nascimento, cidade, curriculo, link_repositorio, status, updated_on)
VALUES (
    '1b727c10-8c6e-46f1-ab12-f89ad27c0cfe',
    'Sabrina',
    '12719211621',
    'sabrina@email.com',
    '1996-04-21 12:00:00.016 -0300',
    'Ipatinga',
    'curriculo sabrina',
    'https://github.com/SabrinaKaren',
    '03584644-7c4d-4422-ba7f-8710c1c3b0e4',
    now()
);

INSERT INTO candidato (id, nome, cpf, email, data_nascimento, cidade, curriculo, link_repositorio, status, updated_on)
VALUES (
    'de098786-94d7-4d26-a89e-9a446e452880',
    'Pedro',
    '12345926678',
    'pedro@email.com',
    '2000-07-16 12:00:00.016 -0300',
    'São Paulo',
    'curriculo pedro',
    'https://github.com',
    '7b1cf9d7-3341-4d8d-b3d2-a529f52241a2',
    now()
);

---------------------------------------------------------------------------