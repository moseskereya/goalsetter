const express = require('express');
const router = express.Router();
const { getGoals, getSingleGoal, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const {protect} = require('../middleware/AuthMiddleware')
router.get('/', protect, getGoals);
router.get('/:id', getSingleGoal);
router.post('/', setGoal);
router.put('/:id', protect, updateGoal);
router.delete('/:id', protect, deleteGoal);


module.exports = router;