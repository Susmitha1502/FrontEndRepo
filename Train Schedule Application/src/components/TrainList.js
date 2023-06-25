import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch the train data from the API
    fetch("http://104.211.219.98:80/train/trains")
      .then((response) => response.json())
      .then((data) => setTrains(data))
      .catch((error) => console.log(error));
  }, []);

  if (!Array.isArray(trains)) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/trains/${train.trainNumber}`}>{train.trainName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainList;


