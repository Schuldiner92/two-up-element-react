import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './Components/NavBar';
import { TwoUpElements } from "./components/TwoUpElements";
import { TwoUpImages } from "./components/TwoUpImages";
import { TwoUpGifs } from "./components/TwoUpGifs";



export const TwoUpApp = () => {
  return (
    <>
        <Router>
          <NavBar/> 
          <Routes>
            <Route path="/" element={<TwoUpElements/>} />
            <Route path="/images" element={<TwoUpImages/>} />
            <Route path="/gifs" element={<TwoUpGifs/>} />
          </Routes>
        </Router>
    </>
  )
}
