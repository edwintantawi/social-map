import { sequelize, DataTypes } from './index.js';
import { User } from './Users.model.js';

const Thread = sequelize.define('thread', {
  id: {
    type: DataTypes.STRING,
    autoIncrement: false,
    primaryKey: true,
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pictureUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'id',
    },
  },
});

Thread.belongsTo(User, { foreignKey: 'userId' });

export { Thread };
