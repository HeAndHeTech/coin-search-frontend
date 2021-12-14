import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import SearchResultPage from './components/SearchResultPage/SearchResultPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' exact render={SearchResultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
