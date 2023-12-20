import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/about/About';
import Apointments from './pages/apointments/Apointments';
import Doctors from './pages/doctors/Doctos';
import Home from './pages/home/Home';
import { doctors } from './utils/data';

function App() {
  console.log(doctors);

  return (
    <div className="app-container">
      
      <BrowserRouter>
        <h1>Doctor Appointment Website</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/apointments" element={<Apointments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
