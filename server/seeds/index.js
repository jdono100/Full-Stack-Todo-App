const db = require('../config/connection');
const { Todo } = require('../models/index');

const todoSeed = require('./todoData.json');

db.once('open', async () => {
  await Todo.insertMany(todoSeed);
  console.log('Database seeded!');
  process.exit(0);
});
