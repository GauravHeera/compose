import { Routes, Route } from "react-router-dom"
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
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/templates" element={<Templates/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </>
  )
}

export default App