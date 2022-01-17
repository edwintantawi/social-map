import dotenv from 'dotenv';

dotenv.config();

export const getEnv = (envKey) => {
  const env = process.env[envKey];
  if (env === undefined) {
    throw new Error(`[ ENV ] Fail to load Env: "${envKey}"`);
  }
  return env;
};

export const serverOptions = {
  port: process.env.PORT || 5000,
};

export const mysqlDatabaseOptions = {
  dialect: 'mysql',
  host: getEnv('MYSQL_HOST'),
  username: getEnv('MYSQL_USER'),
  password: getEnv('MYSQL_PASSWORD'),
  database: getEnv('MYSQL_DATABASE'),
};
