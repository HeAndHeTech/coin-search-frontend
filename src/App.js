import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
