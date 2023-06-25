/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';


function TrainDetails() {
  const { id } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    fetch(`http://104.211.219.98/train/trains/${id}`)
      .then((response) => response.json())
      .then((data) => setTrainDetails(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {trainDetails ? (
        <div>
          <Typography variant="h2">Train Details</Typography>
          <Typography variant="body1">Train Name: {trainDetails.name}</Typography>
          <Typography variant="body1">Train Number: {trainDetails.number}</Typography>
          {/* Render other train details *}
        </div>
      ) : (
        <Typography variant="body1">Loading train details...</Typography>
      )}
    </div>
  );
}

export default TrainDetails;
*/
/*
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TrainDetailsPage = () => {
  const { id } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://104.211.219.98/train/trains/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch train details');
        }
        return response.json();
      })
      .then((data) => {
        setTrainDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading train details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {trainDetails && (
        <div>
          <h2>Train Details</h2>
          <p>Train Name: {trainDetails.name}</p>
          <p>Train Number: {trainDetails.number}</p>
          {/* Render other train details *}
        </div>
      )}
    </div>
  );
};

export default TrainDetailsPage;
*/

import React, { useEffect, useState } from 'react';

const TrainDetails = () => {
  const [trainDetails, setTrainDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://104.211.219.98/train/trains/2344')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch train details');
        }
        return response.json();
      })
      .then((data) => {
        setTrainDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading train details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {trainDetails && (
        <div>
          <h2>Train Details</h2>
          <p>Train Name: {trainDetails.trainName}</p>
          <p>Train Number: {trainDetails.trainNumber}</p>
          <p>Departure Time: {trainDetails.departureTime.Hours}:{trainDetails.departureTime.Minutes}</p>
          <p>Seats Available (Sleeper): {trainDetails.seatsAvailable.sleeper}</p>
          <p>Seats Available (AC): {trainDetails.seatsAvailable.AC}</p>
          <p>Price (Sleeper): {trainDetails.price.sleeper}</p>
          <p>Price (AC): {trainDetails.price.AC}</p>
          <p>Delayed By: {trainDetails.delayedBy} minutes</p>
        </div>
      )}
    </div>
  );
};

export default TrainDetails;
