const models = require('../models/characterModel.js');

const getCharacters = (req, res) => {
  models.getCharacters((err, docs) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(docs);
    }
  });
};

const getCharacterById = (req, res) => {
  const { id } = req.params;
  models.getCharacterById(id, (err, docs) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(docs);
    }
  });
};

const upsertCharacter = (req, res) => {
  const { id } = req.params;
  // console.log(req.body._id);
  let characterInfo = req.body;
  characterInfo._id = characterInfo._id || id;
  if(!characterInfo._id) {
    models.createCharacter(characterInfo, (err, doc) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).send(doc);
      }
    });
  } else {
    console.log(req.body._id);
    models.upsertCharacter(characterInfo, (err, doc) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).send(doc);
      }
    });
  };
};

const createCharacter = (req, res) => {
  let characterInfo = req.body;
  console.log(req.body._id);
  models.createCharacter(characterInfo, (err, doc) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).send(doc);
    }
  });
};

const deleteCharacter = (req, res) => {
  const { id } = req.params;
  models.deleteCharacter(id, (err, docs) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
};

module.exports = {
  createCharacter,
  getCharacters,
  getCharacterById,
  upsertCharacter,
  deleteCharacter,
};