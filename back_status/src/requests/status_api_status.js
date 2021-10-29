import express from "express";
import pool from "../config/database.js";

const status_api_status = express.Router();

status_api_status.get("/status", (req, res) => {
  pool.getConnection((e) => {
    if (e) {
        console.error("db connection fail", e);
      res.json({ message: "connection to back: true, db: false" });
    } else {
      res.json({ message: "connection to back: true, db: true" });
      connnection.release();
    }
  });
});

export default status_api_status;
