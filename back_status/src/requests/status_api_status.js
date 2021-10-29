import express from "express";
import pool from "../config/database.js";

const status_api_status = express.Router();

status_api_status.get("/status", (req, res) => {
  pool.getConnection((e, connection) => {
    if (e) {
      console.error("db connection fail", e);
      res.json({ message: "connection to back: true, db: false" });
    } else {
      console.log("db connection successed");
      res.json({ message: "connection to back: true, db: true" });
      connection.release();
    }
  });
});

export default status_api_status;
