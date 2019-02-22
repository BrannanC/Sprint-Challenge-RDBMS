const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// POST for adding projects.

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if(!project.projectName || !project.description){
        res.status(400).json({ error: 'Please provide project name and description' })
    } else {
        db('projects') 
        .insert(project)
        .then(id => {
            res.status(201).json({ id: id[0] })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add project' })
        })
    }
});

// POST for adding actions.

server.post('/api/projects/:id', (req, res) => {
    const action = {...req.body, projectId: req.params.id};
    if(!action.action){
        res.status(400).json({ error: 'Please provide action name' })
    } else {
        db('actions') 
        .insert(action)
        .then(id => {
            res.status(201).json({ id: id[0] })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add action', action })
        })
    }
});

// GET for retrieving a project
server.get('/api/projects/:id', (req, res) => {

    db('projects').where('id', req.params.id).first()
        .then(project => {
            db('actions')
                .where('projectId', req.params.id)
                .then(actions => {
                    res.status(200).json({ project: {...project, actions} })
                })            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get projects' })
        })
});

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