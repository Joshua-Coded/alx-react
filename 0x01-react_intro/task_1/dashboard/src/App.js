import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';
import Notifications from './Notifications';
function App() {
  return (
    <div className="App">

      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <Notifications />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
    
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
