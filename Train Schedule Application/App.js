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
  /*return (
    <Router>
      <Routes>
        <Route path="/" element={<TrainList />} />
        <Route path="/train/:id" element={<TrainDetails />} />
      </Routes>
    </Router>
  );*/
}

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/train/:id" element={<SingleTrainPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/
