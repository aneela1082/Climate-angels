import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import Portfolio from "./components/Portfolio.js";
import Navbar from "./components/Navbar.js";
import Rightbar from './components/Rightbar.js';


function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className='sub-app'>
        <Header/>
        <Portfolio/>

      </div>
      <Rightbar/>
    </div>
  );
}

export default App;
