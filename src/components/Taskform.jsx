import React, { useState } from "react";
import { addTask } from "../api/api";

const TaskForm = ({ reload }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="bg-white shadow-md p-4 rounded-xl text-center">
      <h2 className="text-xl font-semibold mb-3 ">Add Task</h2>
      <div className="flex gap-2">
        <input
          className="flex-1 border px-3 py-2 rounded-lg"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 rounded-lg"
          onClick={async () => {
            await addTask({ title });
            setTitle("");
            reload();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
