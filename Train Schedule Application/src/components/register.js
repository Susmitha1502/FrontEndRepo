import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainDetails from './TrainDetails';

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://104.211.219.98:80/train/trains');
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {trains.map((train) => (
        <Train key={train.trainNumber} train={train} />
      ))}
    </div>
  );
}

function Train({ train }) {
  return (
    <div>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      {/* Display other train details */}
    </div>
  );
}

export default TrainList;
