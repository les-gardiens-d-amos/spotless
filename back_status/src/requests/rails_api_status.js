import express from "express";

const rails_api_status = express.Router();

rails_api_status.get("/test", (req, res) => {
    res.json({ message: `test` });
});

export default rails_api_status;
