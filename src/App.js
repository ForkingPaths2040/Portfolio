import Header from './components/Header/Header';
import './App.css';
import Landing from './components/Landing/Landing';
import Works from './components/Works/Works';
import {Route} from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div >
      <Route exact path='/'>
        <Header />
        <Landing />
        <Works />
        <About />
        <Contact />
      </Route>
      
    </div>
  );
}

export default App;
