const alarms = require("./../alarms");

const express = require("express");
const router = express.Router();

// GET all alarms
router.get("/", (req, res) => {
  res.json(alarms);
});

// GET alarms by alarm id
router.get("/:alarmId", (req, res) => {
  res.json(alarms);
});

// POST alarms/create
router.post("/create/:alarmId", (req, res) => {
  res.json(`New alarm: ${req.params.alarmId}`);
});
// UPDATE alarms/:alarmId
router.put("/:alarmId/:alarmId", (req, res) => {
  res.json(`Updating alarm: ${req.params.alarmId}`);
});

// GET alarms/:alarmId
router.get("/:alarmId/:alarmId", (req, res) => {
  res.json(`Getting alarm: ${req.params.alarmId}`);
});
// DELETE alarms/:alarmId
router.delete("/:alarmId", (req, res) => {
  res.json(`Deleting alarm: ${req.params.alarmId}`);
});

module.exports = router;
