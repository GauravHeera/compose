import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Background from './components/Background'
import Menu from './components/Menu'
import Home from './components/Home'
import Templates from "./components/Templates"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"


function App() {

  return (
    <>
      <Background/>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/templates" element={<Templates/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
