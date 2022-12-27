import express from "express";
const router = express.Router();

import {
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} from "../controller/todoModel.js";

router.route("/").get(getTodo);
router.route("/create").post(createTodo);
router.route("/edit/:id").patch(editTodo);
router.route("/delete/:id").delete(deleteTodo);

export default router;
