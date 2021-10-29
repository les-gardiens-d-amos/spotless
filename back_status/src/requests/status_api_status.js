import express from "express";
import connect from "../config/database.js";

const status_api_status = express.Router();

status_api_status.get("/status", (req, res) => {
    connect().then((r) => {
      if(r) {
        res.json({ message: "connection to back: true, db: true" });
      } else {
        res.json({ message: "connection to back: true, db: false" });
      }
    });
});

export default status_api_status;