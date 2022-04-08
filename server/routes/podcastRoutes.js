const podcasts = require("./../podcast");

const express = require("express");
const router = express.Router();

// GET all podcasts
router.get("/", (req, res) => {
	res.json(podcasts);
});

// GET podcasts by podcast id
router.get("/:podcastId", (req, res) => {
	res.json(podcasts);
});

// POST podcasts/create
router.post("/create/:podcastId", (req, res) => {
	res.json(`New podcast: ${req.params.podcastId}`);
});
// UPDATE podcasts/:podcastId
router.put("/:podcastId/:podcastId", (req, res) => {
	res.json(`Updating podcast: ${req.params.podcastId}`);
});

// GET podcasts/:podcastId
router.get("/:podcastId/:podcastId", (req, res) => {
	res.json(`Getting podcast: ${req.params.podcastId}`);
});
// DELETE podcasts/:podcastId
router.delete("/:podcastId", (req, res) => {
	res.json(`Deleting podcast: ${req.params.podcastId}`);
});

module.exports = router;
