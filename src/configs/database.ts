import * as pg from "pg";
import { config } from "./config";

export const db = new pg.Pool({
  user: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: 5432,
  host: "localhost",
});
