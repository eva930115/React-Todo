require("dotenv").config();     //引入密碼

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)   //密碼寫在.env避免暴露
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Todo Schema
const TodoSchema = new mongoose.Schema({
  content: String,
  isCompleted: Boolean,
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model("Todo", TodoSchema);

// 取得全部 Todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// 新增 Todo
app.post("/todos", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// 更新 Todo
app.put("/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// 刪除 Todo
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
