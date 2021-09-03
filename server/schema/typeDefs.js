const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type TodoData {
    _id: ID
    title: String
    completed: Boolean
  }
  type Query {
    alltodos: [TodoData]!
    oneTodo(todoId: ID!): TodoData
  }
  type Mutation {
    addTodo(title: String!, completed: Boolean!): TodoData
  }
`
module.exports = typeDefs;