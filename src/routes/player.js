const express = require('express');
const playerController = require('../controllers/player.js');

const router = express.Router();

/**
* Set all routes here
*/
router.get('/', playerController.getPlayes);
router.post('/', playerController.addPlayer);
router.get('/:id', playerController.getPlayer);

module.exports = router;
