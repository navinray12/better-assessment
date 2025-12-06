import express from "express";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.get("/:taskId", getComments);
router.post("/:taskId", addComment);
router.put("/single/:id", updateComment);
router.delete("/single/:id", deleteComment);

export default router;
