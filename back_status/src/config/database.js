import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASS,
  port: 3306,
  user: process.env.DATABASE_USER,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
