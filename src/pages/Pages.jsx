import Auth from "./Auth";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './Home';

function Pages() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Auth/>}/>
        <Route path="/home" element={<Home/>}/> 
      </Routes>
    </AnimatePresence>
  )
}

export default Pages