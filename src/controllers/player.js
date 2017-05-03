const Player = require('../models/Player.js');
const mongoose = require('mongoose');

exports.getPlayes = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.status(200).json(players);
  });
};

exports.getPlayer = (req, res) => {
  Player.findById(req.params.id, (err, player) => {
    if (err) {
      res.status(500).json(err.message);
    }
    if (!player) {
      res.status(404).send('The player you request does not exsist');
    }
    res.status(200).json(player);
  });
};

exports.addPlayer = (req, res) => {
  const newPlayer = new Player(req.body);
  newPlayer.save((err, player) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.status(200).send(player);
  });
};

exports.updatePlayer = (req, res) => {
  Player.updateOne({_id: req.params.id}, req.body, {}, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.status(200).send('You successfully update the player with id, ' + req.params.id);
  });
};

exports.deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.status(200).send('You successfully delete the player with id, ' + req.params.id);
  });
};

