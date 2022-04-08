const recipes = require("./../recipes");

const express = require("express");
const router = express.Router();

// GET all recipes
router.get("/", (req, res) => {
	res.json(recipes);
});

// GET recipes by user id
router.get("/:userId", (req, res) => {
	res.json(recipes);
});

// POST recipes/create
router.post("/create/:userId", (req, res) => {
	res.json(`New recipe: ${req.params.userId}`);
});
// UPDATE recipes/:recipeId
router.put("/:recipeId/:userId", (req, res) => {
	res.json(`Updating recipe: ${req.params.recipeId}`);
});

// GET recipes/:recipeId
router.get("/:recipeId/:userId", (req, res) => {
	res.json(`Getting recipe: ${req.params.recipeId}`);
});
// DELETE recipes/:recipeId
router.delete("/:recipeId", (req, res) => {
	res.json(`Deleting recipe: ${req.params.recipeId}`);
});

module.exports = router;
