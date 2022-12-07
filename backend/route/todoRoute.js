import express from "express";
const router = express.Router();

import { createTodo, editTodo, deleteTodo } from "../controller/todoModel.js";

router.route("/create").post(createTodo);
router.route("/edit").patch(editTodo);
router.route("/delete").delete(deleteTodo);

export default router;
