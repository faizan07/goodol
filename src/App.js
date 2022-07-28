import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About'
import FactDetails from './components/FactDetails';
import Facts from './components/Facts'
import FactsItems from './components/FactsItems';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Facts/>}/>
          <Route exact path="/about" element={<About/>}/>
          {/* <Route exact path="/factitems" element={<FactsItems/>} /> */}
          <Route exact path="/factitems/:id" element={<FactDetails/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}
