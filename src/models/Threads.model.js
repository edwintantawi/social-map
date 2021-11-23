import mysql from 'mysql2';
import { nanoid } from 'nanoid';
import { mysqlDatabaseOptions } from '../config/index.js';
import { NotFoundError } from '../exceptions/NotFoundError.js';

class ThreadsModel {
  constructor() {
    this._db = mysql.createPool(mysqlDatabaseOptions).promise();
  }

  async addThread({ caption, latitude, longitude }) {
    const id = `thread-${nanoid(16)}`;

    const SQL = this._db.format(
      `INSERT INTO threads (id, caption, latitude ,longitude)
        VALUES (?, ?, ?, ?)`,
      [id, caption, latitude, longitude]
    );

    await this._db.query(SQL);
    return id;
  }

  async getThreads() {
    const SQL = `SELECT * 
                  FROM threads
                  ORDER BY created_at DESC`;

    const [rows] = await this._db.query(SQL);
    return rows;
  }

  async getThreadsById(id) {
    const SQL = this._db.format(
      `SELECT *
      FROM threads
      WHERE id = ?`,
      [id]
    );

    const [rows] = await this._db.query(SQL);

    if (!rows.length) {
      throw new NotFoundError('Thread not found');
    }

    return rows[0];
  }
}

export { ThreadsModel };
