const express = require('express');

const app = express();
app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find(({id}) => id === Number(req.params.id));
  res.status(200).json(activity);
})

app.get('/myActivities', (req, res) => {
  res.status(200).json({activities});
})

app.get('/filter/myActivities', (req, res) => {
  const {status} = req.query;
  let filteredActivies = activities;

  if(status) {
    filteredActivies = activities.filter((activity) => activity.status === status);
  }

  res.status(200).json({activities: filteredActivies});
})

app.get('/search/myActivities', (req, res) => {
  const {q} = req.query;
  let filteredActivies = [];

  if (g) {
    filteredActivies = activities.filter((activity) => activity.description.includes(q));
  }

  res.status(200).json({activities: filteredActivies});
})

module.exports = app;