import React, { useEffect, useState } from "react";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../api/api";
import CommentItem from "./Commentitem";

const CommentSection = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const loadComments = async () => {
    const res = await getComments(taskId);
    setComments(res.data);
  };

  useEffect(() => {
    loadComments();
  }, [taskId]);

  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-3">Comments</h3>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded-lg"
          onClick={async () => {
            await addComment(taskId, { content: text });
            setText("");
            loadComments();
          }}
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {comments.map((c) => (
          <CommentItem
            key={c.id}
            comment={c}
            onDelete={async (id) => {
              await deleteComment(id);
              loadComments();
            }}
            onUpdate={async (id, newText) => {
              await updateComment(id, { content: newText });
              loadComments();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
