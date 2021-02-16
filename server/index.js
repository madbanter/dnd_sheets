const express = require('express');
const controllers = require('./controllers/characterController.js');

const app = express();
const port = 3000;

app.use('/', express.static(`${__dirname}/../client/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/characters', controllers.getCharacters);
app.get('/api/characters/:id', controllers.getCharacterById);
app.post('/api/characters', controllers.upsertCharacter);
app.put('/api/characters/:id', controllers.upsertCharacter);
app.patch('/api/characters/:id', controllers.upsertCharacter);
app.delete('/api/characters/:id', controllers.deleteCharacter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
