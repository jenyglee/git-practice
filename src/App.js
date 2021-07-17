import logo from './logo.svg';
import './App.css';
import Signup from "./Signup"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Signup />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />
          
      </header>
    </div>
  );
}

export default App;
