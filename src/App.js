import "./App.css";
import Header from "./pages/circle/components/header/header";
import Circle from "./pages/circle/components/circle/Circle";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreathBlock from "./pages/breathing/components/breathBlock/BreathBlock";
import Breathing from "./pages/breathing/components/breathing/Breathing";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Circle />}></Route>
        <Route path="/breathing" element={<Breathing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
