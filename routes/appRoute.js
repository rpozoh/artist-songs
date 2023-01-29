const express = require("express");
const router = express.Router();
const Constants = require('../utils/constants.js');
const getTracksController = require('../controllers/getTracksController.js');
const addFavoritesController = require('../controllers/addFavoritesController.js');
const { cache } = require('../middlewares/middleware.js');

router
.get(Constants.getTracks, getTracksController.getTracks, cache)
.post(Constants.favorites, addFavoritesController.addFavorite, cache);

module.exports = router;