import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import About from './pages/about/About';
import Appointments from './pages/appointments/Appointments';
import Doctors from './pages/doctors/Doctos';
import Home from './pages/home/Home';
import { doctors } from './utils/data';
import "./styles/global.scss";
import Footer from './components/footer/Footer';


function Layout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  console.log(doctors);
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
