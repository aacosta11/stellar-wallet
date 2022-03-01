import React from "react";
import Layout from "./Components/Shared/Layout";
import Home from "./Views/Home/Home";
import History from "./Views/History";
import About from "./Views/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </>);
}

export default App;
