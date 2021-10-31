import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Tours from './Components/Pages/Tours/Tours';

import LogIn from './Components/Contact/LogIn';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import TourDetails from './Components/Pages/TourDetails/TourDetails';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddTours from './Components/AddTours/AddTours';
import Booking from './Components/Booking/Booking';
import ManageTourPlans from './Components/ManageTourPlans/ManageTourPlans';
import MyBookings from './Components/MyBookings/MyBookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/tours">
                <Tours></Tours>
              </Route>
              <PrivateRoute path="/tourdetails/:tourId">
              <TourDetails></TourDetails>
              </PrivateRoute>
             <PrivateRoute path="/addTours">
               <AddTours></AddTours>
             </PrivateRoute>
              <Route path="/contact">
                <LogIn></LogIn>
              </Route>
              <PrivateRoute path="/booking">
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/manageTour'>
                <ManageTourPlans></ManageTourPlans>
              </PrivateRoute>
              <PrivateRoute path='/myBookings'>
                <MyBookings></MyBookings>
              </PrivateRoute>
              <Route path='/myBookings/:bookingId'>
                <MyBookings></MyBookings>
              </Route>
              
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
