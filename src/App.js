import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import AddServer from './components/AddServer/AddServer';
import ViewServers from './components/ViewServers/ViewServers';
import UserPage from './components/UserPage/UserPage'
import LogInPage from './components/LogInPage/LogInPage';

function App() {

  const adminUser = {
    user: 'Admin01',
    password: 'admin123'
  };

  const [user, setUser] = useState({user: ""});
  const [error, setError] = useState("");

  const LogIn = details => {
    if (details.user === adminUser.user && details.password === adminUser.password){
      setUser({
        user: details.user
      })
    } else {
      setError("Usuario o Contraseña incorrectos");
    }
    
  }

  const LogOut = () => {
    setUser({ user:""})
  }

  return (
    <div className="App">
      <Router>
            {(user.user !== "")  ? (
              <div className="NavBar">
                <Link className="Logo" to="/ViewServers"><img className="logoNav" src={require('./logo.svg').default} alt="VERCER LOGO"/></Link>
                <Link className="ServBtn" to="/AddServer"><span>Añadir Servidores</span></Link>
                <Link className="ViewBtn" to="/ViewServers"><span>Ver Servidores</span></Link>
                <Link className="UserIcon" to="/UserPage"><span>User</span></Link>
                <Link className="LogOut" onClick={LogOut} to="/"><span>LogOut</span></Link>
              </div>
            ) : (
              <LogInPage LogIn={LogIn} error={error}/>
            )}
        <Route exact path='/AddServer' component={AddServer}/>
        <Route exact path='/ViewServers' component={ViewServers}/>
        <Route exact path='/UserPage' component={UserPage}/>
      </Router>
    </div>
  );
}

export default App;
