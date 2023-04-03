const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get all Goals" });
})

const setGoal = asyncHandler(async (req, res) => {
       if (!req.body.text) {
       res.status(404)
       throw new Error('Please at text');
    }

    res.status(200).json({ msg: "Set Goal" });
})


const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Update goal ${req.params.id} ` });
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Delete Goal  ${req.params.id}` });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}