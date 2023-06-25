import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';
import TrainDetails from './TrainDetails';

function TrainList() {
    const [trains, setTrains] = useState([]); // Initialize trains as an empty array
  
    useEffect(() => {
      // Fetch the train data from the API
      fetch("http://104.211.219.98:80/train/trains")
        .then((response) => response.json())
        .then((data) => setTrains(data))
        .catch((error) => console.log(error));
    }, []);
  
    // Check if trains is an array before using map
    if (!Array.isArray(trains)) {
      return <p>Loading...</p>;
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
