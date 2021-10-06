import express from "express";

const router = express.Router();

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const login = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    res.status(200).json(login);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const { fullName, username, email, password } = req.body;
  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    res.status(200).json("user already exists");

    if (!existingUser) {
      const newEvent = await pool.query(
        "INSERT INTO users (fullName,username, email, password) VALUES ($1,$2,$3,$4)",
        [fullName, username, email, password]
      );
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//events route logins

export const getEvents = async (req, res) => {
  try {
    const allEvents = await pool.query("SELECT * FROM tasks");

    res.status(200).json(allEvents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEvent = async (req, res) => {
  const { name } = req.params;
  try {
    const oneEvent = await pool.query("SELECT * FROM tasks WHERE name = $1", [
      name,
    ]);

    res.status(200).json(oneEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { name, start_date, end_date, price } = req.body;
    const newEvent = await pool.query(
      "INSERT INTO tasks (name,start_date,end_date,price) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, start_date, end_date, price]
    );

    res.status(200).json(newEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getParticipants = async (req, res) => {
  const { name } = req.params;
  try {
    const participants = await pool.query(
      "SELECT * FROM tasks WHERE name = $1 AND participants",
      [name]
    );

    res.status(200).json(participants.row);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const { name } = req.params;
  const { start_date, end_date, price } = req.body;
  try {
    const updateEvent = await pool.query(
      "UPDATE tasks SET (start_date,end_date,price) VALUES ($1,$2,$3) WHERE name = $4",
      [start_date, end_date, price, name]
    );

    res.status(200).json(updateEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { name } = req.params;
  try {
    const oneEvent = await pool.query("DELETE * FROM tasks WHERE name = $1", [
      name,
    ]);

    res.status(200).json(oneEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
