import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'
import Cart from './components/Cart'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
