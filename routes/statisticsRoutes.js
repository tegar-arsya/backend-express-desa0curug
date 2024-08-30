const express = require('express');
const {
  getStatistics,
  createStatistic,
  updateStatistic,
  deleteStatistic
} = require('../controllers/StatisticsController');
const router = express.Router();

router.get('/statistics', getStatistics);
router.post('/statistics', createStatistic);
router.put('/statistics/:id', updateStatistic);
router.delete('/statistics/:id', deleteStatistic);

module.exports = router;
