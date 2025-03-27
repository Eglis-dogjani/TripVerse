import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";

import Tirana from "./components/Tirana";
import Places from "./components/Places";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tirana" element={<Tirana />}></Route>
        <Route path="/places" element={<Places />}></Route>
      </Routes>

    </>
  );
}

export default App;