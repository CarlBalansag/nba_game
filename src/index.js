import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Countdown from './components/Countdown';
import Maintenance from './pages/Maintenance';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <App />
  </>
);


reportWebVitals();
