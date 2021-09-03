const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  }
);

const TodoData = model('TodoData', todoSchema);

module.exports = { TodoData };