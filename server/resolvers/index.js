import Todo from '../models/Todo.js';

const resolvers = {
    Query: {
      listTodos: () => Todo.findAll(),
    },
    Mutation: {
      createTodo: async (parent, { title }) => {
        const todo = await Todo.create({ title });
        return todo;
      },
      markTodoCompleted: async (parent, { id }) => {
        const todo = await Todo.findByPk(id);
        todo.completed = true;
        await todo.save();
        return todo;
      },
      markTodoUncompleted: async (parent, { id }) => {
        const todo = await Todo.findByPk(id);
        todo.completed = false;
        await todo.save();
        return todo;
      },
      deleteTodo: async (parent, { id }) => {
        const todo = await Todo.findByPk(id);
        if (!todo) {
          return false;
        }
        await todo.destroy();
        return true;
      },
    },
  };  

export default resolvers;