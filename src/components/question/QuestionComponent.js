import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('search') || '');
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const key = searchParams.get('search') || '';
    if (key) {
      fetch(`/api/tasks?search=${key}`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
    }
  }, [searchParams]);
  const handleSearch = (e) => {
    setSearchParams({search: keyword});
  }
  // TODO: Implement data fetching inside a useEffect hook
  

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description} - {task.status}
            </li>
        ))}
      </ul>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
