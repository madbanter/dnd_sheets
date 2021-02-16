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
  inspiration: String,
  proficiencyBonus: Number,
  savingThrows: {
    strength: {value: Number, proficient: Boolean},
    dexterity: {value: Number, proficient: Boolean},
    constitution: {value: Number, proficient: Boolean},
    intelligence: {value: Number, proficient: Boolean},
    wisdom: {value: Number, proficient: Boolean},
    charisma: {value: Number, proficient: Boolean},
  },
  skills: {
    acrobatics: {value: Number, proficient: Boolean},
    animalHandling: {value: Number, proficient: Boolean},
    arcana: {value: Number, proficient: Boolean},
    athletics: {value: Number, proficient: Boolean},
    deception: {value: Number, proficient: Boolean},
    history: {value: Number, proficient: Boolean},
    insight: {value: Number, proficient: Boolean},
    intimidation: {value: Number, proficient: Boolean},
    investigation: {value: Number, proficient: Boolean},
    medicine: {value: Number, proficient: Boolean},
    nature: {value: Number, proficient: Boolean},
    perception: {value: Number, proficient: Boolean},
    performance: {value: Number, proficient: Boolean},
    persuasion: {value: Number, proficient: Boolean},
    religion: {value: Number, proficient: Boolean},
    slightOfHand: {value: Number, proficient: Boolean},
    stealth: {value: Number, proficient: Boolean},
    survival: {value: Number, proficient: Boolean},
  },
  otherProficiencesAndLanguages: String,
  passivePerception: Number,
  passiveInvestigation: Number,
  passiveInsight: Number,
  armorClass: Number,
  initiative: Number,
  speed: Number,
  hp: {
    current: Number,
    max: Number,
    temporary: Number,
  },
  hitDice: {
    current: String,
    total: String,
  },
  deathSaves: {
    successes: Number,
    failures: Number,
  },
  attacks: [
    {
      name: String,
      attackBonus: Number,
      damage: String,
    }
  ],
  attackNotes: String,
  gear: {
    money: {
      cp: Number,
      sp: Number,
      ep: Number,
      gp: Number,
      pp: Number,
    },
    equipment: String,
  },
  personalityTraits: String,
  ideals: String,
  bonds: String,
  flaws: String,
  featuresAndTraits: String,
  additionalFeaturesAndTraits: String,
  age: Number,
  height: String,
  weight: String,
  eyes: String,
  skin: String,
  hair: String,
  appearance: {
    description: String,
    image: String,
  },
  alliesAndOrganizations: String,
  symbol: {
    name: String,
    image: String,
  }
  treasure: String,
  spellcasting: {
    class: String,
    ability: String,
    saveDC: Number,
    attackBonus: Number,
  },
  cantrips: [
    {
      name: String,
      school: String,
    }
  ],
  spells: [
    {
      level: Number,
      slots: {
        total: Number,
        expended: Number,
      },
      spellsKnown: [
        {
          name: String,
          school: String,
          components: String,
          prepared: Boolean,
        },
      ]
    },
  ],
});

const Character = mongoose.model('Character', characterSchema);

module.exports = {
  Character,
  connection,
};
