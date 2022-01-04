import { db } from "../configs";
import * as bcrypt from "bcrypt";

class UsersService {
  async findOne(id: string) {
    const user = await db.query(`SELECT * FROM users WHERE id='${id}';`);
    return user.rows[0];
  }

  async findMany() {
    const users = await db.query(`SELECT * FROM users;`);
    return users;
  }

  async create(username: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await db.query(
      `INSERT INTO users(username, password) VALUES ('${username}','${hash}') RETURNING *;`
    );

    return newUser.rows[0];
  }

  async update(id: string, username?: string, password?: string) {
    if (username) {
      await db.query(
        `UPDATE users SET username='${username}' WHERE user_id='${id}';`
      );
    }

    if (password) {
      const hash = await bcrypt.hash(password, 10);
      await db.query(
        `UPDATE users SET password='${hash}' WHERE user_id='${id}';`
      );
    }

    const user = await db.query(`SELECT * FROM users WHERE user_id='${id}';`);
    return user.rows[0];
  }

  async remove(id: string) {
    await db.query(`DELETE FROM users WHERE user_id='${id}';`);
  }
}

export const usersService = new UsersService();
