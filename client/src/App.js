import IsBlurredContext from "./Context/IsBlurredContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import BuildTransaction from "./Views/Dashboard/BuildTransaction";
import History from "./Views/Dashboard/History";
import NotFound from "./Views/NotFound";
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
          {/* defaulted to show build transaction */}
          <Route index element={<BuildTransaction />} />
          {/* shows transaction history with account */}
          <Route exact path="history" element={<History />} />
          {/* placeholder route, subject to change */}
          <Route exact path="discover" element={<History />} />

          {/* 404 catch */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </IsBlurredContext.Provider>
    </>
  );
}
export default App;