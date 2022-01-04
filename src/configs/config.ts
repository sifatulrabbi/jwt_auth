import * as dotenv from "dotenv";
import * as fs from "fs";

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
  console.log("ENV loaded");
} else {
  dotenv.config({ path: ".env.example" });
  console.log("ENV Examples loaded");
}

export const config = {
  PROD: process.env.NODE_ENV === "production",
  PORT: parseInt(process.env.PORT || "5000", 10),
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_MAX_AGE: process.env.JWT_MAX_AGE,
  AGENT_EMAIL: process.env.AGENT_EMAIL,
  AGENT_PASS: process.env.AGENT_PASS,
};
