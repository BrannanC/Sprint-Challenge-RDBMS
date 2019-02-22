const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// POST for adding projects.



// POST for adding actions.

// GET for retrieving a project
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json({ projects })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get projects' })
        })
});



const port = process.env.PORT || 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});