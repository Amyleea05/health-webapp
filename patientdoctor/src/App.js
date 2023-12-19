import logo from './logo.svg';
import './App.css';

function App() {

  //API FETCHING SECTION
  // fetch('https://randomuser.me/api/?results=10')
  // .then(response => response.json())
  // .then(data => console.log(data))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React is fun
        </a>
      </header>
    </div>
  );
}

export default App;
