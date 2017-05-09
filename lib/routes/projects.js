const express = require('express');
const router = express.Router(); 
const bodyParser = require('body-parser').json();
const Project = require('../models/project');

router
  .get('/', (req, res, next) => {
    Project.find();
  })

  .post('/', bodyParser, (req, res, next) => {
    new Project(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });