// Importing css
import './css/App.css';
import './css/style.scss';

// Importing component
import Weather from './API/Weather';

function App() {
  return (
    <div className="App">
      <h2>Weather</h2>
      <Weather />
    </div>
  );
}

export default App;
