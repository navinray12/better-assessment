import React from "react";
import TaskList from "./components/Tasklist";

function App() {
  return (
    <div className="min-h-screen bg-[#FFE4E1] flex flex-col items-center py-10 px-4">

      
      <h1 className="text-Black text-4xl font-bold mb-10 drop-shadow-lg tracking-wide">
        Task & Comments Manager
      </h1>

      
      <div className="w-full max-w-2xl">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
