import express from "express";

const railsApiStatus = express.Router();

railsApiStatus.get("/test", (req, res) => {
  res.json({ message: "test" });
});

export default railsApiStatus;
