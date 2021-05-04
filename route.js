import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h1>🧛‍♀️ Hello! This is Root<h1>`);
});

export default router;
