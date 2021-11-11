import logo from './logo.svg';
import './App.css';
import TopBanner from './Component/TopBanner/TopBanner';
import Navigationbar from './Component/Navigationbar/Navigationbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Products from './Component/Products/Products';
import Footer from './Component/Footer/Footer';
import AuthProvider from './Context/AuthProvder/AuthProvider';
import Register from './Component/Register/Register';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Navigationbar></Navigationbar>
              <TopBanner></TopBanner>
              <Products></Products>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Navigationbar></Navigationbar>

              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path='/allProducts'>
              <Navigationbar></Navigationbar>
              <TopBanner></TopBanner>
              <Products></Products>
            </Route>
            <Route path='/register'>
              <Navigationbar></Navigationbar>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route path='/placeorder'>
              <Navigationbar></Navigationbar>
              <PlaceOrder></PlaceOrder>
              <Footer></Footer>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>





          </Switch>


        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
