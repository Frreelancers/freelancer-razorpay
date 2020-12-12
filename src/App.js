import logo from './logo.svg';
import './App.css';
import './css/landing.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename={process.env.PUBLIC_URL}><AppRouter /></Router>
      </header>
    </div>
  );
}

export default App;
