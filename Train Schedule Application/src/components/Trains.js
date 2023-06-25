import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trains = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://104.211.219.98/train/trains', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODc2OTI2NzcsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYzU4MjJiMTctYjEyMy00NzU1LWFkYTgtMDhmODEwODQ5NzlhIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQkYxQTMzMjEifQ.NKOkda66HHNtwk0vQj7wu9m_IYLGNsqOmuGuo5NomcU',
          },
        });
        setTrains(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrains();
  }, []);

  if (loading) {
    return <p>Loading trains...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Trains</h2>
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h3>{train.trainName}</h3>
          <p>Train Number: {train.trainNumber}</p>
          {/* Display other train details */}
        </div>
      ))}
    </div>
  );
};

export default Trains;

