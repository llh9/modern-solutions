import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './Components/Pages/Welcome/';
import Home from './Components/Pages/Home/';
import About from './Components/Pages/About/';
import Contact from './Components/Pages/Contact/';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Welcome/>
      </Route>
      <Route exact path='/Home'>
        <Home/>
      </Route>
      <Route exact path='/About'>
        <About/>
      </Route>
      <Route exact path='/Contact'>
        <Contact/>
      </Route>
    </Router>
  );
}

export default App;