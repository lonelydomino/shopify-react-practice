import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">

      <Router>
      <p>Navigation</p>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
