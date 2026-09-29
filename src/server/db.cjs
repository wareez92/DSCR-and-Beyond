const pg = require("pg");

const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/dscr_and_beyond_db",
);

const bcrypt = require("bcrypt");

// --------- TABLES --------- //

const createTables = async () => {
  const SQL = `
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(50) NOT NULL,
      isAdmin BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS portfolio (
      id SERIAL PRIMARY KEY,
      portName VARCHAR(255) NOT NULL,
      portAddress VARCHAR(255),
      portImage VARCHAR(500),
      portImage2 VARCHAR(500),
      portImage3 VARCHAR(500),
      description_en TEXT,
      description_fr TEXT,
      description_es TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

  `;

  await client.query(SQL);
};

const createUser = async ({ username, password, email, isAdmin = false }) => {
  const SQL = `
    INSERT INTO users (username, password, email, isAdmin)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (username) DO NOTHING
    RETURNING *;
  `;

  const response = await client.query(SQL, [
    username,
    await bcrypt.hash(password, 5),
    email,
    isAdmin,
  ]);

  return response.rows[0];
};

const createPortItem = async ({
  portName,
  portAddress,
  portImage,
  portImage2,
  portImage3,
  description_en,
  description_fr,
  descritpion_es,
}) => {
  const SQL = `
    INSERT INTO portfolio (portName, portAddress, portImage, portImage2, portImage3, description_en, description_fr, description_es)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
    RETURNING *;
  `;

  const response = await client.query(SQL, [
    portName,
    portAddress,
    portImage,
    portImage2,
    portImage3,
    description_en,
    description_fr,
    descritpion_es,
  ]);

  return response.rows[0];
};

// --------- READ --------- //

const fetchUsers = async () => {
  const SQL = `
    SELECT * FROM users;
  `;

  const response = await client.query(SQL);

  return response.rows;
};

const fetchPortfolio = async () => {
  const SQL = `
    SELECT * FROM portfolio;
  `;

  const response = await client.query(SQL);

  return response.rows;
};

// --------- EXPORTS --------- //

module.exports = {
  client,
  createTables,
  createUser,
  fetchUsers,
  createPortItem,
  fetchPortfolio,
};
