import IsBlurredContext from "./Context/IsBlurredContext";
import Dashboard from "./Views/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import { useState } from "react";
import './Styles/global.css';
import './App.css';
function App() {
  const [isBlurred,setIsBlurred] = useState(false);
  return (
    <>
    <IsBlurredContext.Provider value={{isBlurred,setIsBlurred}}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>

    </IsBlurredContext.Provider>
    </>
  );
}
export default App;