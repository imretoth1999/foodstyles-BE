import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

class Todo extends Model {}

Todo.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'todo',
});

export default Todo;
