const Player = require('../models/Player.js');

exports.getPlayes = async function (req, res) {
  const players = await Player.find({});
  res.status(200).json(players);
};

exports.getPlayer = async function (req, res) {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      res.status(404).send('The player you request does not exsist');
    }
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.addPlayer = async function (req, res) {
  try {
    const newPlayer = new Player(req.body);
    const player = await newPlayer.save();
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.updatePlayer = async function (req, res) {
  try {
    const result = await Player.updateOne({ _id: req.params.id }, req.body, {});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deletePlayer = async function (req, res) {
  try {
    const result = await Player.deleteOne({ _id: req.params.id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

