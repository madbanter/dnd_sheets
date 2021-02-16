const mongoose = require('mongoose');

const connectionString = process.env.CONNECTIONSTRING || 'mongodb://localhost/characters';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;

const characterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  classAndLevel: String,
  Background: String,
  playerName: String,
  race: String,
  alignment: String,
  xp: String,
  attributes: {
    strength: {value: Number, mod: Number},
    dexterity: {value: Number, mod: Number},
    constitution: {value: Number, mod: Number},
    intelligence: {value: Number, mod: Number},
    wisdom: {value: Number, mod: Number},
    charisma: {value: Number, mod: Number},
  },
  location: {
    city: String,
    state: String,
    country: String,
  },
  gallery: [
    {
      _id: Number,
      photoName: String,
      photoUrl: String,
      photoDescription: String,
      isVerified: Boolean,
      hasDescription: Boolean,
    },
  ],
});

const Character = mongoose.model('Character', characterSchema);

module.exports = {
  Character,
  connection,
};
