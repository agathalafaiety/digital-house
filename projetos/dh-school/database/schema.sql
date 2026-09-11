CREATE DATABASE IF NOT EXISTS escola
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE escola;

CREATE TABLE IF NOT EXISTS areas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS cursos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  area_id INT UNSIGNED,
  PRIMARY KEY (id),
  CONSTRAINT fk_cursos_area
    FOREIGN KEY (area_id) REFERENCES areas (id)
);

CREATE TABLE IF NOT EXISTS professores (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  sobrenome VARCHAR(255),
  area_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_professores_area
    FOREIGN KEY (area_id) REFERENCES areas (id)
);

CREATE TABLE IF NOT EXISTS turmas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  duracao INT,
  ano_inicio INT,
  semestre INT,
  curso_id INT UNSIGNED NOT NULL,
  professor_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_turmas_curso
    FOREIGN KEY (curso_id) REFERENCES cursos (id),
  CONSTRAINT fk_turmas_professor
    FOREIGN KEY (professor_id) REFERENCES professores (id)
);

CREATE TABLE IF NOT EXISTS alunos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  sobrenome VARCHAR(255),
  ano_matricula INT,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS alunos_has_turmas (
  alunos_id INT UNSIGNED NOT NULL,
  turma_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (alunos_id, turma_id),
  CONSTRAINT fk_alunos_has_turmas_aluno
    FOREIGN KEY (alunos_id) REFERENCES alunos (id),
  CONSTRAINT fk_alunos_has_turmas_turma
    FOREIGN KEY (turma_id) REFERENCES turmas (id)
);
