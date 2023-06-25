import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainDetails from './components/TrainDetails';
import TrainList from './components/TrainList';

function App() {
  return (
    <div>
      <h1>Train Schedule</h1>
      <TrainList />
    </div>
  );
}

export default App;
