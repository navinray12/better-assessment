import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/api";
import TaskForm from "./Taskform";
import CommentSection from "./Commentsection";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [openId, setOpenId] = useState(null);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-6">
      <TaskForm reload={loadTasks} />

      <ul className="mt-6 flex flex-col gap-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="bg-white shadow-md rounded-xl p-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{t.title}</h3>

              <div className="flex gap-3">
                <button
                  className="text-blue-600"
                  onClick={() =>
                    setOpenId(openId === t.id ? null : t.id)
                  }
                >
                  Comments
                </button>
                <button
                  className="text-red-600"
                  onClick={async () => {
                    await deleteTask(t.id);
                    loadTasks();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>

            {openId === t.id && (
              <CommentSection taskId={t.id} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
