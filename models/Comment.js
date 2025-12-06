import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Task from "./Task.js";

const Comment = sequelize.define("Comment", {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Task.hasMany(Comment, { onDelete: "CASCADE" });
Comment.belongsTo(Task);

export default Comment;
