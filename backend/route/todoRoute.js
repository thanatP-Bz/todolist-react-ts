import express from "express";
const router = express.Router();

import { createTodo, editTodo, deleteTodo } from "../controller/todoModel.js";

router.route("/").post(createTodo);
router.route("/edit/:id").patch(editTodo);
router.route("/delete/:id").delete(deleteTodo);

export default router;
