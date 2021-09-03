const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Mongoose connected...');
});

module.exports = mongoose.connection;
