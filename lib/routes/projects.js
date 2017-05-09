const express = require('express');
const router = express.Router(); //eslint-disable-line 
const bodyParser = require('body-parser').json();
const Project = require('../models/project');

router
  .get('/', (req, res, next) => {
    Project.find()
      .then(projects => res.send(projects))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Project(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });