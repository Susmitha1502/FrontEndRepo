import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainDetails';
import Trains from './components/Trains';

function App() {
  return (
    <div>
      <h1>Train Schedule</h1>
      <Router>
        <Routes>
          <Route path="/" element={<TrainList />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/trains/:trainId" element={<TrainDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
