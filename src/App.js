import "./App.css";
import Header from "./pages/circle/components/header/header";
import Circle from "./pages/circle/components/circle/Circle";

import { HashRouter, Route, Routes } from "react-router-dom";
import Breathing from "./pages/breathing/components/breathing/Breathing";

function App() {
  return (
    <HashRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Circle />}></Route>
        <Route path="/breathing" element={<Breathing />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
