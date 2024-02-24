import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-colour';

function App() {
  return (
    <div className="App">

      {/* Accordian  */}
      {
        <Accordian />

      }
       
      {/* Random colour generation */}
      {
        <RandomColor />
      }

    </div>
  );
}

export default App;
