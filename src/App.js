
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>

      
    </div>
  </BrowserRouter>
  );
}

export default App;
