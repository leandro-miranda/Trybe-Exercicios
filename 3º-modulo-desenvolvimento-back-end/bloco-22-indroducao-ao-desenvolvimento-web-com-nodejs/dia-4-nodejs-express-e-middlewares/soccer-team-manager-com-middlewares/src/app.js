const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

const teams = [
  {
    id: 1,
    name: 'Clube de Regatas Flamengo',
    initials: 'CRF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());

// usa o middleware
app.get('/teams/:id', existingId, (_req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', (req, res) => {
  const newTeam = {...req.body};
  teams.push(newTeam);

  res.status(201).json({team: newTeam});
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  const index = teams.indexOf(team);
  const updated = {id, ...req.body};
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);  
})

module.exports = app;