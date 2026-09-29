import './App.css'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Welcome from './Welcome';

function App() {

  return (
    <>
    <BrowserRouter>

            <nav>

                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/Contact">Contact</Link>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>

        <Welcome />

    </>



  );
}

export default App;