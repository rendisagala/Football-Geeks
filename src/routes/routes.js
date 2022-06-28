const express = require("express");
const router = express.Router();
const league = require("../models/league");
const season = require("../models/season");

router.route("/").get(season.seasonStanding);

module.exports = router;
