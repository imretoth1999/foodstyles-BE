export default `#graphql
type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    listTodos: [Todo!]!
  }

  type Mutation {
    createTodo(title: String!): Todo!
    markTodoCompleted(id: ID!): Todo!
    markTodoUncompleted(id: ID!): Todo!
    deleteTodo(id: ID!): ID!
  }
`;