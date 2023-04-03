const express = require('express');
const router = express.Router();
const {getGoals, getSingleGoal ,setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.get('/', getGoals);
router.get('/:id', getSingleGoal);
router.post('/', setGoal);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);


module.exports = router;