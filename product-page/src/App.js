import './App.css';
import Navbar from './components/header/Nav';
import Footer from './components/footer/Footer';
import Main from './components/body/main';

function App() {
  return (
    <div className="App">

      <div className='Navbar'>
        <Navbar />
      </div>
      
      {/*
      <div>
        <Main />
      </div>
      */}
      
      {/*
      <div className='Footer'>
        <Footer />
      </div>
      */}
      
    </div>

  );
}

export default App;
