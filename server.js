import express from "express";
import cors from "cors";
import sequelize from "./db.js";

import taskRoutes from "./routes/tasks.js";
import commentRoutes from "./routes/comments.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);
app.use("/comments", commentRoutes);

// DB Sync
sequelize.sync().then(() => {
  console.log("Database synced");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
