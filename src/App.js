import './App.css';
import Countdown from './components/Countdown';
import Maintenance from './pages/Maintenance';
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import PastSeason from './pages/pastSeason';
import Live from './pages/Live';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Maintenance' element={<Maintenance />} />
          <Route path='/Countdown' element={<Countdown />} />
          <Route path='/PastSeason' element={<PastSeason />} />
          <Route path='/Live' element={<Live />} />
          <Route path='/PastSeason' element={<PastSeason />} />
        </Routes>
      </BrowserRouter>
      <Router>
      </Router>
    </>
  );
}

export default App;
