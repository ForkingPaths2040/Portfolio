import Header from './components/Header/Header';
import './App.css';
import Landing from './components/Landing/Landing';
import Works from './components/Works/Works';
import {Route} from 'react-router-dom'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel';


function App() {
  return (
    <div >
      <Route exact path='/'>
        <Header />
        <Landing />
        <Works />
      </Route>
      <Route exact path='/slider'>
        <ProjectCarousel />
      </Route>
    </div>
  );
}

export default App;
