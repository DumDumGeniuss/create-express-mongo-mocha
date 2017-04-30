const Player = require('../models/Player.js');
const mongoose = require('mongoose');

exports.getPlayes = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.status(500).send(err.message);
    }
    res.status(200).json(players);
  });
};

exports.getPlayer = (req, res) => {
  const params = req.params;
  Player.findById(params.id, (err, player) => {
    if (err) {
      res.status(500).send(err.message);
    }
    res.status(200).json(player);
  });
};

exports.addPlayer = (req, res) => {
  const newPlayer = new Player(req.body);
  newPlayer.save((err, player) => {
    if (err) {
      res.status(500).send(err.message);
    }
    res.status(200).json(player);
  });
};
