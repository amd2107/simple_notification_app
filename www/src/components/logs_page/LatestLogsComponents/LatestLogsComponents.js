import React, { useEffect, useState } from 'react';
import { fetchLogs } from "../../../services/api";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

function LatestLogsComponents() {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchLogs()
      .then(logs => setLogs(logs))
      .catch(error => console.error('Error fetching logs:', error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Phone Number</th>
              <th>Channel</th>
              <th>Category</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.name}</td>
                <td>{log.email}</td>
                <td>{log.message}</td>
                <td>{log.phone_number}</td>
                <td>{log.channel}</td>
                <td>
                  {log.category.map((category, i) => (
                    <div key={i}>{category.name}</div>
                  ))}
                </td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
    );
}

export default LatestLogsComponents;



