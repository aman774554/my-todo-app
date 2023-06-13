import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Todo from './components/Todo';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
  <div className="App">
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/todo"  element={<Todo /> } />
    </Routes>
  </div>
</Router>

  );
}

export default App;
