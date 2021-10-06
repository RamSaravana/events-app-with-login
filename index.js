import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./database/db.js";

import authRoutes from "./Routes/authRoutes.js";
import eventRoutes from "./Routes/authRoutes.js";

const app = express();

pool
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json({ extended: "true" }));

app.use(cors());

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);

const PORT = 5000;

app.get("/", (req, res) => res.send("Welcome to Events Application"));

app.listen(PORT, () => console.log(`Listening to port number ${PORT}`));
