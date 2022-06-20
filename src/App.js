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
import ExploreProduct from './Component/ExploreProduct/ExploreProduct';
import FAQ from './Component/FAQ/FAQ';
import Review from './Component/Review/Review';
import ReviewForm from './Component/Review/ReviewForm';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';
import ProductCard from './Component/ProductCard/ProductCard';

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

              <Review></Review>
              <FAQ></FAQ>
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

            <PrivateRoute path='/placeorder/:id'>
              <Navigationbar></Navigationbar>
              <PlaceOrder></PlaceOrder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/allproduts'>
              <Navigationbar></Navigationbar>
              <ExploreProduct></ExploreProduct>
              <Footer></Footer>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>





          </Switch>


        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
