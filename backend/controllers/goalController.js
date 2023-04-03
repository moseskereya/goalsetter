const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
})

const setGoal = asyncHandler(async (req, res) => {
       if (!req.body.text) {
       res.status(404)
       throw new Error('Please at text');
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal);
})


const getSingleGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    } else {
       res.status(200).json(goal);
    }
})

const updateGoal = asyncHandler(async (req, res) => {
  await Goal.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Goal Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
})


const deleteGoal = asyncHandler(async (req, res) => {
  await Goal.findByIdAndRemove(req.params.id, req.body)
    .then(goal => res.json({ mgs: 'Goal is deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a goal' }));
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    getSingleGoal
}

