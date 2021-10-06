import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "Password@1234",
  database: "taskApp_database",
  host: "localhost",
  port: 5432,
});

export default pool;
