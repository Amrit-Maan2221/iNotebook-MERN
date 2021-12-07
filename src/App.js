import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';


function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert typeOfMsg={"success"} msg={"yeah"} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />

        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
