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

const upsertCharacter = (characterInfo, cb) => {
  db.Character.findOneAndUpdate({ _id === characterInfo._id },
    characterInfo,
    {
      upsert: true,
      omitUndefined: true,
      returnOriginal: false,
      overwrite: true,
      setDefaultsOnInsert: true,
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

const deleteCharacter = (characterInfo, cb) => {
  db.Character.findByIdAndDelete(characterInfo._id), ((err, doc) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      cb(null, doc);
    }
  });
};

module.exports = {
  getCharacterById,
};
