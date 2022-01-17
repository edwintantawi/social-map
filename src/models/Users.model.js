import { sequelize, DataTypes } from './index.js';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    autoIncrement: false,
    primaryKey: true,
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { User };
