import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const addTask = async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  await Task.update({ title }, { where: { id } });
  res.json({ message: "Updated" });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.destroy({ where: { id } });
  res.json({ message: "Deleted" });
};
