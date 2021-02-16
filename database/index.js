const mongoose = require('mongoose');

const connectionString = process.env.CONNECTIONSTRING || 'mongodb://localhost/characters';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;

const characterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  classAndLevel: {type: String, default: ''},
  Background: {type: String, default: ''},
  playerName: {type: String, default: ''},
  race: {type: String, default: ''},
  alignment: {type: String, default: ''},
  xp: {type: Number, default: 0},
  attributes: {
    strength: {value: {type: Number, default: 0}, mod: {type: Number, default: 0}},
    dexterity: {value: {type: Number, default: 0}, mod: {type: Number, default: 0}},
    constitution: {value: {type: Number, default: 0}, mod: {type: Number, default: 0}},
    intelligence: {value: {type: Number, default: 0}, mod: {type: Number, default: 0}},
    wisdom: {value: {type: Number, default: 0}, mod: {type: Number, default: 0}},
    charisma: {value: {type: Number, default: 0}, mod: {type: Number, default: 0}},
  },
  inspiration: {type: String, default: ''},
  proficiencyBonus: {type: Number, default: 2},
  savingThrows: {
    strength: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    dexterity: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    constitution: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    intelligence: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    wisdom: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    charisma: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
  },
  skills: {
    acrobatics: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    animalHandling: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    arcana: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    athletics: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    deception: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    history: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    insight: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    intimidation: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    investigation: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    medicine: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    nature: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    perception: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    performance: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    persuasion: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    religion: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    slightOfHand: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    stealth: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
    survival: {value: {type: Number, default: 0}, proficient: {type: Boolean, default: false}},
  },
  otherProficiencesAndLanguages: {type: String, default: ''},
  passivePerception: {type: Number, default: 0},
  passiveInvestigation: {type: Number, default: 0},
  passiveInsight: {type: Number, default: 0},
  armorClass: {type: Number, default: 10},
  initiative: {type: Number, default: 0},
  speed: {type: Number, default: 30},
  hp: {
    current: {type: Number, default: 1},
    max: {type: Number, default: 1},
    temporary: {type: Number, default: 0},
  },
  hitDice: {
    current: {type: String, default: ''},
    total: {type: String, default: ''},
  },
  deathSaves: {
    successes: {type: Number, default: 0},
    failures: {type: Number, default: 0},
  },
  attacks: [
    {
      name: {type: String, default: ''},
      attackBonus: {type: String, default: ''},
      damage: {type: String, default: ''},
    }
  ],
  attackNotes: {type: String, default: ''},
  gear: {
    money: {
      cp: {type: Number, default: 0},
      sp: {type: Number, default: 0},
      ep: {type: Number, default: 0},
      gp: {type: Number, default: 0},
      pp: {type: Number, default: 0},
    },
    equipment: {type: String, default: ''},
  },
  personalityTraits: {type: String, default: ''},
  ideals: {type: String, default: ''},
  bonds: {type: String, default: ''},
  flaws: {type: String, default: ''},
  featuresAndTraits: {type: String, default: ''},
  additionalFeaturesAndTraits: {type: String, default: ''},
  age: {type: Number, default: 21},
  height: {type: String, default: ''},
  weight: {type: Number, default: 0},
  eyes: {type: String, default: ''},
  skin: {type: String, default: ''},
  hair: {type: String, default: ''},
  appearance: {
    description: {type: String, default: ''},
    image: {type: String, default: ''},
  },
  alliesAndOrganizations: {type: String, default: ''},
  symbol: {
    name: {type: String, default: ''},
    image: {type: String, default: ''},
  }
  treasure: {type: String, default: ''},
  spellcasting: {
    class: {type: String, default: ''},
    ability: {type: String, default: ''},
    saveDC: {type: Number, default: 10},
    attackBonus: {type: Number, default: 2},
  },
  cantrips: [
    {
      name: {type: String, default: ''},
      school: {type: String, default: ''},
      components: {type: String, default: ''},
    }
  ],
  spells: [
    {
      level: Number,
      slots: {
        total: Number,
        expended: {type: Number, default: 0},
      },
      spellsKnown: [
        {
          name: {type: String, default: ''},
          school: {type: String, default: ''},
          components: {type: String, default: ''},
          prepared: {type: Boolean, default: false},
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
