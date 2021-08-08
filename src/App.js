import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import FlagDetail from "./components/FlagDetail";
import Flags from './components/Flags';

function App() {
return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>          
        </ul>                
        <Switch>
          <Route exact path="/">
            <Flags />
          </Route>          
          <Route path="/:countryCode">
            <FlagDetail />          
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}
export default App;
