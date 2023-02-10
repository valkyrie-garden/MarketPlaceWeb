import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

import FrontPage from './pages/FrontPage'; 

function App() {
  return (
    <Router>
      <ThemeProvider>
      <h1>Navbar...</h1>
      <hr/>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
