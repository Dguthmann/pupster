import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/discover" ></Route>
        <Route exact path="/search" ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
