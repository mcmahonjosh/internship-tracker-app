import { useEffect, useState } from 'react';

function App() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/applications')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(error => console.error('Error fetching applications:', error));
  }, []);

  return (
    <div>
      <h1>Job Applications</h1>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.company_name} - {app.job_title} - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
