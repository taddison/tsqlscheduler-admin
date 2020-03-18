import React, { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskResult = await fetch("/api/tasks");
      const tasksJson = await taskResult.json();
      setTasks(tasksJson);
    }
    getTasks();
  },[]);

  return (
    <div>
      {tasks.toString()}
    </div>
  );
}

export default App;
