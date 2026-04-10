import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTasks } from '../../api/client';

function QuestionComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('search') || '');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const key = searchParams.get('search') || '';

      let data = await getTasks();

      if (key) {
        data = data.filter((task) =>
          task.title.toLowerCase().includes(key.toLowerCase())
        );
      }

      setTasks(data);
    }

    fetchData();
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({ search: keyword });
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search tasks"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionComponent;