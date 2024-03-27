import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import Offer from './components/Offer/Offer';
import Cars from './components/Cars/Cars';
import AdvancedServices from './components/AdvancedServices/AdvancedServices';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import News from './components/News/News';
import Buy from './components/Buy/Buy';
import Cardata from './components/Cardata/Cardata';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      loggedIn: false,
      user: {
        id: '',
        name: '',  
        email: '',
        joined: ''
      }
    };
    this.fetch = false;
  }

  // API call //Cars
  componentDidMount() {
    if (!this.fetch) {
      // fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      //   .then(response => response.json())
      //   .then(data => {
      //     const firstSixMakes = data.Results.slice(0, 40);
      //     this.setState({ cars: firstSixMakes });
      //   })
      //   .catch(err => console.log('Error:', err));
       

      //GET request from Back-end to get cars-info...
      fetch('http://localhost:2001/info-cars', {
        method: 'get',
      headers: {'Content-type':'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          console.log('DATA FROM CARS (BACK-END)', data); // Deberías recibir un array con los datos de los carros
          // Procesa los datos y muestra los carros en tu página
          this.setState({ cars: data });
        })
        .catch(error => {
        console.log('Error:', error);
  });   

      this.fetch = true;
}   
     
    // Restore login data from local storage              
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      this.setState({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          joined: user.joined
        },
        loggedIn: true
      });
    }
  }

  loadUser = (data) => {
    this.setState(
      {
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          joined: data.joined
        },
        loggedIn: true,
      },
      () => {
        console.log('Usuario cargado:', this.state.user);
        // Store login data in the storage
        localStorage.setItem('loggedInUser', JSON.stringify(data)); 
      }
    );
  }

  handleSignOut = () => {
    this.setState(
      {
        loggedIn: false,
        user: {
          id: '',
          name: '',
          email: '',
          joined: ''
        }
      },
      () => {
        console.log('Usuario cerró sesión');
        // Eliminar datos de inicio de sesión del almacenamiento local
        localStorage.removeItem('loggedInUser'); 
      }
    );
  };

  render() {
    const { cars, loggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar name={this.state.user.name} loggedIn={loggedIn} onSignOut={this.handleSignOut} />
                  <Filter />
                  <Offer />
                  <Cars infoCars={cars} />
                  <AdvancedServices />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/buy"
              element={
                <>
                  
                  <Buy infoCars={cars} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/news"
              element={
                <>
                  <News />
                  <Footer />
                </>
              }
            />
            <Route
              path="/signin"
              element={
                <>    
                  <SignIn loadUser={this.loadUser} />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Register loadUser={this.loadUser} />
                </>
              }
            />
              <Route
              path="/Cardata"
              element={
                <>
                 <Cardata infoCars={cars} />
                 <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
