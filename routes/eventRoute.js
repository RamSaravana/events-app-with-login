import express from "express";

import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getParticipants,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.put("/:id/participants", getParticipants);

export default router;
