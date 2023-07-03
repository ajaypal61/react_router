import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
// import User from "./User";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" Component={About} /> */}
        <Route path="/About" element={<About />} />
        {/* <Route path="/contact" Component={Contact} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </>
  )
}

export default App;