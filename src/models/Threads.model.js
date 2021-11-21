import mysql from 'mysql2';
import dotenv from 'dotenv';
import { nanoid } from 'nanoid';

dotenv.config();

class ThreadsModel {
  constructor() {
    this._db = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
  }

  addThread({ caption }) {
    return new Promise((resolve, reject) => {
      const id = `thread-${nanoid(16)}`;

      const SQL = this._db.format(
        `INSERT INTO threads (id, caption)
        VALUES (?, ?)`,
        [id, caption]
      );

      this._db.query(SQL, (error) => {
        if (error) {
          reject(new Error('Thread failed to add'));
        }
        resolve(id);
      });
    });
  }

  getThreads() {
    return new Promise((resolve, reject) => {
      const SQL = 'SELECT * FROM threads';

      this._db.query(SQL, (error, results) => {
        if (error) {
          reject(new Error('Thread failed to get'));
        }
        resolve(results);
      });
    });
  }
}

export { ThreadsModel };
