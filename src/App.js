
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/Homepage';
import icon1 from "./img/Vector (1).png";
 import icon2 from "./img/Vector (2).png";
 import icon3 from "./img/Vector (3).png";

function App() {
  return (
    <div className="App">
      <Header />

      <Homepage />

     <footer>
      <div className='footer'>
      <img src={icon1} alt="#" /> 
      <img src={icon2} alt="#" />
      <img src={icon3} alt="#" />
      </div>
     </footer>
    </div>
  );
}

export default App;
