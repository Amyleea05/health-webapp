import './App.css';
import { doctors } from './utils/data';

function App() {
  console.log(doctors);

  

  return (
    <div className="app-container">
      {doctors.map(doctor => 
        <div>
          <h1>{doctor.name}</h1>
          <h1>{doctor.specialty}</h1>
          <img src={doctor.url} alt={doctor.name}/>
        </div>
      )}
    </div>
  );
}

export default App;
