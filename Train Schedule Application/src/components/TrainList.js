/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';


function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('http://104.211.219.98:80/train/trains')
      .then((response) => response.json())
      .then((data) => setTrains(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <List>
      {trains.map((train) => (
        <ListItem key={train.id}>
          <Link to={`/train/${train.id}`} style={{ textDecoration: 'none' }}>
            <Typography variant="body1">{train.name}</Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default TrainList;*/
/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';

function TrainListPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('http://104.211.219.98/train/trains')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTrains(data);
        } else {
          throw new Error('Invalid train data');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box sx={{ margin: '2rem', backgroundColor: '#f7f7f7', padding: '1rem' }}>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        All Trains
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {trains.map((train) => (
          <ListItem
            key={train.id}
            sx={{ marginBottom: '0.5rem', backgroundColor: '#ffffff', padding: '0.5rem' }}
          >
            <Link to={`/train/${train.id}`} style={{ textDecoration: 'none' }}>
              <Typography variant="body1">{train.name}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TrainListPage;

*/
import React, { useEffect, useState } from 'react';
import TrainDetails from './TrainDetails';
// Assuming you have a component called TrainList where you're using trains.map

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
  

/*const TrainList = () => {
  const [trainList, setTrainList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://104.211.219.98:80/train/trains')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch train list');
        }
        return response.json();
      })
      .then((data) => {
        setTrainList(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading train list...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Train List</h2>
      {trainList.map((train) => (
        <div key={train.trainNumber}>
          <h3>{train.trainName}</h3>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
          <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
          <p>Price (Sleeper): {train.price.sleeper}</p>
          <p>Price (AC): {train.price.AC}</p>
          <p>Delayed By: {train.delayedBy} minutes</p>
        </div>
      ))}
    </div>
  );
};
*/
export default TrainList;
