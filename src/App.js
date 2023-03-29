import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Head from './main-page/main';
import Random from './Components/Random';
import Articulator from './Components/tajweed';
import Math from './Components/math';

// import Test from './Components/Test';
import Crud from './Components/crud';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Head />}></Route>
        <Route path='/alphabate-game' element={<Random />}></Route>
        <Route path='/tajweed-master/*' element={<Articulator />}></Route>
        <Route path='/mini-math-mind/*' element={<Math />}></Route>
        <Route path='/crud-opration' element={<Crud />}></Route>
        {/* <Route path='/crud-opration' element={<Test />}></Route> */}
      </Routes>
    </Router>
    {/* <Test /> */}
    </>
  );
}

export default App;
