import './App.css';
import Navbar from './components/header/Nav';
import Landingpage from './components/header/Landingpage';
import Main from './components/body/Main';

function App() {
  return (
    <div className="App">

      <div className='Navbar'>
        <Navbar />
      </div>
      
      <div className='Landingpage'>
        <Landingpage />
      </div>
      
      <div className='Main'>
        <Main />
      </div>

    </div>

  );
}

export default App;
