import Comment from "../models/Comment.js";

export const getComments = async (req, res) => {
  const { taskId } = req.params;
  const comments = await Comment.findAll({ where: { TaskId: taskId } });
  res.json(comments);
};

export const addComment = async (req, res) => {
  const { taskId } = req.params;
  const { content } = req.body;

  const comment = await Comment.create({
    content,
    TaskId: taskId
  });

  res.status(201).json(comment);
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  await Comment.update({ content }, { where: { id } });
  res.json({ message: "Updated" });
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  await Comment.destroy({ where: { id } });
  res.json({ message: "Deleted" });
};
