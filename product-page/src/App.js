import './App.css';
import Navbar from './components/header/Nav';
import Landingpage from './components/header/Landingpage';

function App() {
  return (
    <div className="App">

      <div className='Navbar'>
        <Navbar />
      </div>
      
      <div className='Landingpage'>
        <Landingpage />
      </div>
      
    </div>

  );
}

export default App;
