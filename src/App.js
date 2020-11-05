import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Discover from './components/pages/Discover';
import Search from './components/pages/Search';


function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
        <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route exact path="/discover" >
          <Discover/>
        </Route>
        <Route exact path="/search" >
          <Search/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
