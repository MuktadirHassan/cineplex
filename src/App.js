import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Booking from './components/Booking';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <div className="max-w-5xl pb-12 mx-auto">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/:id/:date/:time">
                <Booking />
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
