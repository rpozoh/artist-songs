const express = require("express");
const router = express.Router();
const getTracksController = require('../controllers/getTracksController.js');
const addFavoritesController = require('../controllers/addFavoritesController.js');

router
.get("/", getTracksController.getTracks);
//.post(Constants.favorites, addFavoritesController);

module.exports = router;