import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-colour';
import StarRating from './components/star-rating';

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
      <StarRating noOfStars={10} />

    </div>
  );
}

export default App;
