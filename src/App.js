
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import './css/style.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const headerElement = useRef();
  useEffect(() => {
    const onScroll = (event) => {
      console.log('eTarget-scrollY: ', event.path[1].scrollY);
      console.log(`1. onScroll, scrollPosition: ${scrollPosition}`);
      setScrollPosition(event.path[1].scrollY);
      // const scrollY = window.scrollY;
      console.log(`2. onScroll, scrollPosition: ${scrollPosition}`);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [scrollPosition]);

  const toggleButtonClickHandler = (event) => {
    console.log('Home :: toggleButtonClickHandler : className :', event.target.className);
    setToggle(!isToggled);
  }
  const linkClickHandler = (event) => {
    console.log('Home :: toggleButtonClickHandler : className :', event.target.className);
    setToggle(false);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <header ref={headerElement} className={scrollPosition > 0 ? "sticky" : ""}>
          <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="toggle-button" onClick={toggleButtonClickHandler}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className={isToggled ? "navbar-links active" : "navbar-links"} >
              <ul>
                <li><Link to="/" onClick={linkClickHandler}>Home</Link></li>
                <li><Link to="/dashboard" onClick={linkClickHandler}>Dashboard</Link></li>
                <li><Link to="/contact" onClick={linkClickHandler}>Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="content-section">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <footer id="footer">
          <div className="innertube">
            <p>Footer...</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
