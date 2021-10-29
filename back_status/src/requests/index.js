import express from 'express';
import connect from '../config/database.js';

const router = express.Router()

router.get('/status', (req, res) => {
  connect();
  res.json({ message: "baba" });
})

export default router;
