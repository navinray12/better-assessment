import React, { useState } from "react";

const CommentItem = ({ comment, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.content);

  return (
    <div className="flex justify-between items-start bg-gray-50 p-3 rounded-lg shadow-sm">
      {editing ? (
        <div className="w-full flex gap-2">
          <input
            className="border rounded px-2 py-1 w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-green-600 text-white px-3 rounded"
            onClick={() => {
              onUpdate(comment.id, text);
              setEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="bg-gray-300 px-3 rounded"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <p className="text-gray-800">{comment.content}</p>
          <div className="flex gap-2">
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="text-red-600 hover:underline"
              onClick={() => onDelete(comment.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CommentItem;
