import logo from './logo.svg';
import './App.css';
import TopBanner from './Component/TopBanner/TopBanner';
import Navigationbar from './Component/Navigationbar/Navigationbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Products from './Component/Products/Products';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navigationbar></Navigationbar>
            <TopBanner></TopBanner>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
            <Navigationbar></Navigationbar>
            <TopBanner></TopBanner>
            <Login></Login>
          </Route>
          <Route path='/allProducts'>
            <Navigationbar></Navigationbar>
            <TopBanner></TopBanner>
            <Products></Products>
          </Route>




        </Switch>


      </BrowserRouter>

    </div>
  );
}

export default App;
