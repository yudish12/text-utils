import React from "react";
import About from "./components/About.jsx";
import Nav from "./components/Nav.jsx";
import Textform from './components/textform.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
    <div className="Appr">
    <Nav title="Text Utils"/>
    <Routes>
      <Route path="/" element={<Textform/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    {/* <Textform/>
    <About/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
