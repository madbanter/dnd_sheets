const db = require('../../database/index.js');

const getCharacters = (cb) => {
  db.Character.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, docs);
    }
  });
};

const getCharacterById = (id, cb) => {
  db.Character.find({ _id: id }, (err, docs) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, docs);
    }
  });
};

const getCharacterByName = (name, cb) => {
  db.Character.find({ name }, (err, docs) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, docs);
    }
  });
};

const createCharacter = (characterInfo, cb) => {
  const newChar = new db.Character(characterInfo);
  newChar.save(
    (err, doc) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, doc);
    }
  });
};

const upsertCharacter = (characterInfo, cb) => {
  db.Character.findOneAndUpdate({ _id: characterInfo._id },
    { $set: characterInfo },
    {
      upsert: true,
      omitUndefined: true,
      returnOriginal: false,
      useFindAndModify: false,
      setDefaultsOnInsert: true,
      overwrite: false
    },
    (err, doc) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, doc);
    }
  });
};

const deleteCharacter = (id, cb) => {
  db.Character.findByIdAndDelete(id), ((err, doc) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, doc);
    }
  });
};

module.exports = {
  createCharacter,
  getCharacters,
  getCharacterById,
  getCharacterByName,
  upsertCharacter,
  deleteCharacter,
};
