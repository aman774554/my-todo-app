import React, { useState } from 'react';
import './bootstrap.css';
import Background from '../images/man.jpg';
import { Navigate  } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === '12345') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (isAuthenticated) {
    return <Navigate  to="/todo" />;
  }

  return (
    <div className="img js-fullheight" style={{backgroundImage: `url(${Background })` , height:"100vh"}}>
      <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-2">
                <h2 className="heading-section">Login Page</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h6 className="mb-4 text-center">Username = admin & password = 12345</h6>
                  <form onSubmit={handleLogin} className="signin-form">
                    <div className="form-group">

                      <input
                        className="form-control"
                        placeholder="Username"
                        required
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        required
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="form-control btn submit px-3 bg-dark">Sign In</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
    </section>
    </div>
  );
};

export default LoginPage;
