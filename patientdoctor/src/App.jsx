import { BrowserRouter, Outlet, Route, Routes, useLocation,} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import About from './pages/about/About';
import Appointments from './pages/appointments/Appointments';
import Doctors from './pages/doctors/Doctors';
import Home from './pages/home/Home';
import { doctors } from './utils/data';
import "./styles/global.scss";
import Footer from './components/footer/Footer';


function Layout() {

  const location = useLocation();
  const hideNavbarOnAbout = location.pathname === '/about';
  return (
    <div className="app">
      {!hideNavbarOnAbout && <Navbar />}
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