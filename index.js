const express = require('express');
const helmet = require('helmet');

const db = require('./data/projectsDB');

const server = express();

server.use(express.json());
server.use(helmet());

const port = process.env.PORT || 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});