import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
