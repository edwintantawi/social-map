import { Sequelize, DataTypes } from 'sequelize';
import { mysqlDatabaseOptions } from '../config/index.js';

const sequelize = new Sequelize(mysqlDatabaseOptions);

export { sequelize, DataTypes };
