const express = require("express");
const router = new express.Router();
const weatherController = require("../../controller/weatherController");

router.get("/weathers", weatherController.index);

module.exports = router;
