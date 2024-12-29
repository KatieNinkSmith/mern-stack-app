const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access public
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set goals
// @route POST /api/goals
// @access public
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text feild");
  }
  res.status(200).json({ message: "Make goals!" });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access public
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit goal ${req.params.id}` });
});

// @desc Delete goal
// @route Delete /api/goals/:id
// @access public
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoal, deleteGoal };
