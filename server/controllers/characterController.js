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
  const characterInfo = req.body;
  models.upsertCharacter(characterInfo, (err, doc) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(doc);
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
  getCharacters,
  getCharacterById,
  upsertCharacter,
  deleteCharacter,
};