import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';
import Notifications from './Notifications';
function App() {
  return (
    <div className="App">

<Notifications /> 
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
     
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />

        <button>Ok</button>
      </div>
    
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
