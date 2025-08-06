import { pool } from "./db.js";

async function initDB() {
    await pool.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'user',
            is_active BOOLEAN DEFAULT FALSE,
            activation_code TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`)
}

initDB();